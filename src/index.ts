type MaybePromise<T> = T | Promise<T>;
export type BenchFn = () => MaybePromise<void | (() => MaybePromise<void>)>;

/**
 * Loop options.
 *
 * Warmup stops when exceeded **both** `warmupIters` and `warmupThreshold`.
 */
export interface LoopOptions {
  /**
   * Number of calls in an iteration. Defaults to `4096`.
   */
  batch?: number;

  /**
   * Number of calls to inline. Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Whether to collect GC timings. Defaults to `false`.
   */
  measureGC?: boolean;

  /**
   * @returns Current heap usage in bytes.
   */
  heapUsage?: () => number;
}

/**
 * Describe a sync benchmark loop.
 *
 * The loop stops when exceeded **both** `iters` and `threshold`.
 *
 * @param threshold in nanosecond.
 */
export type Loop = (
  runs: number[],
  gcs: number[],
  heaps: number[],
  threshold?: number,
  iters?: number,
) => void;

/**
 * Describe an async benchmark loop.
 *
 * The loop stops when exceeded **both** `iters` and `threshold`.
 *
 * @param threshold in nanosecond.
 */
export type AsyncLoop = (
  runs: number[],
  gcs: number[],
  heaps: number[],
  threshold?: number,
  iters?: number,
) => Promise<void>;

/**
 * Warmup a loop
 * @param loop
 * @param threshold
 * @param iters
 */
export const warmupLoop = <T extends Loop | AsyncLoop>(
  loop: T,
  threshold?: number,
  iters?: number,
): T extends Loop ? void : Promise<void> => loop([], [], [], threshold ?? 5e5, iters ?? 2) as any;

/**
 * Create a benchmark loop.
 */
export const createLoop: <const F extends BenchFn>(
  fn: BenchFn,
  gc: () => void,
  hrtime: () => number,
  options?: LoopOptions,
) => Promise<ReturnType<F> extends Promise<any> | (() => Promise<any>) ? AsyncLoop : Loop> = async (
  fn,
  gc,
  hrtime,
  { batch = 4096, inlineCalls = 4, measureGC, heapUsage } = {},
) => {
  let isFnAsync: boolean,
    hasParam = false,
    isParamAsync = false,
    noHeap = heapUsage == null;

  // Detect async
  {
    let res: any = fn();
    (isFnAsync = res instanceof Promise) && (res = await res);

    if (typeof res === 'function') {
      hasParam = true;
      isParamAsync = isFnAsync;

      res = res();
      (isFnAsync = res instanceof Promise) && (res = await res);
    }
  }

  const isLoopAsync = isFnAsync || isParamAsync;

  // Build loop
  let content = `{let{0:${constants.FN_HRTIME},1:${constants.FN_HEAP},2:${constants.FN_GC},3:${constants.FN}}=__measure_loop_dat__;${
    // Whether the loop needs to be async
    isLoopAsync ? 'async' : ''
  }(${constants.SAMPLES},${constants.GCS},${constants.HEAPS},${constants.THRESHOLD}=${924_000_000 * (noHeap ? 1 : 1.1)},${constants.MIN_ITERS}=12)=>{${constants.THRESHOLD}+=${constants.HRTIME};for(${
    // Store dynamic params
    hasParam ? `let ${constants.PARAMS}=new Array(${batch})` : ''
  };${constants.MIN_ITERS}>0||${constants.HRTIME}<${constants.THRESHOLD};${constants.MIN_ITERS}--){${
    // Compute params
    hasParam
      ? `{${constants.HRTIME_MARK_START}for(let i=0;i<${batch};i++)${constants.PARAMS}[i]=${constants.FN}();${
          // Compute concurrently
          isParamAsync ? `${constants.PARAMS}=await Promise.all(${constants.PARAMS});` : ''
        }${constants.HRTIME_MARK_END}${constants.THRESHOLD}+=${constants.HRTIME_DIFF}}`
      : ''
  }${constants.RUN_GC}${
    // Start timings
    noHeap ? '' : `let ${constants.HEAP_TMP}=${constants.HEAP};`
  }${constants.HRTIME_MARK_START}`;

  // Setup calls
  {
    const remainingCalls = batch % inlineCalls;

    if (hasParam) {
      const prefix = isFnAsync ? `await ${constants.PARAMS}[` : `${constants.PARAMS}[`;
      for (let i = 0; i < remainingCalls; i++) content += prefix + i + ']();';

      if (inlineCalls <= batch) {
        content += `for(let i=${remainingCalls};i<${batch};i+=${inlineCalls}){${prefix}i]()`;
        for (let i = 1, callPrefix = `;${prefix}i+`; i < inlineCalls; i++)
          content += callPrefix + i + ']()';
        content += '}';
      }
    } else {
      const call = isFnAsync ? `await ${constants.FN}();` : `${constants.FN}();`;
      remainingCalls > 0 && (content += call.repeat(remainingCalls));
      content += `for(let i=0;i<${(batch - remainingCalls) / inlineCalls};i++){${call.repeat(inlineCalls)}}`;
    }
  }

  // Compute results
  const hrtimeRes = batch > 1 ? `(${constants.HRTIME_DIFF})/${batch}` : constants.HRTIME_DIFF;
  content += `${constants.HRTIME_MARK_END + constants.SAMPLES}.push(${hrtimeRes})`;

  // Store heap usage
  noHeap ||
    (content += `;${constants.HEAP_TMP}=${constants.HEAP}-${constants.HEAP_TMP};${constants.HEAPS}.push(${constants.HEAP_TMP}>0?${batch > 1 ? `${constants.HEAP_TMP}/` + batch : constants.HEAP_TMP}:0)`);

  // Measure gc time
  measureGC &&
    (content += `;{${constants.HRTIME_MARK_START + constants.RUN_GC + constants.HRTIME_MARK_END + constants.GCS}.push(${hrtimeRes})}`);

  // @ts-ignore
  globalThis.__measure_loop_dat__ = [hrtime, heapUsage, gc, fn];
  const loop = (0, eval)(content + '}}}');
  // @ts-ignore
  delete globalThis.__measure_loop_dat__;

  return loop;
};
