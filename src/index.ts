type MaybePromise<T> = T | Promise<T>;
export type BenchFn = () => MaybePromise<void | (() => MaybePromise<void>)>;

/**
 * Loop options.
 *
 * Warmup stops when exceeded **both** `warmupIters` and `warmupThreshold`.
 */
export interface Options<F extends BenchFn = BenchFn> {
  /**
   * @returns A high resolution timestamp in nanosecond.
   */
  hrtime: () => number;

  /**
   * @returns Current heap usage in bytes.
   */
  heapUsage?: () => number;

  /**
   * Run garbage collection **synchronously**.
   */
  gc: () => void;

  /**
   * Function to benchmark.
   */
  fn: F;

  /**
   * Number of calls in an iteration. Defaults to `4096`.
   */
  batch?: number;

  /**
   * Number of calls to inline. Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Whether to collect GC timings. Defaults to `true`.
   */
  measureGC?: boolean;

  /**
   * Min number of warmup iterations. Defaults to `2`.
   */
  warmupIters?: number;

  /**
   * Warmup threshold in nanosecond. Defaults to `5e5`.
   */
  warmupThreshold?: number;
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
 * Create a benchmark loop.
 */
export const createLoop: <const F extends BenchFn>(
  options: Options<F>,
) => Promise<
  ReturnType<F> extends Promise<any> | (() => Promise<any>) ? AsyncLoop : Loop
> = async ({
  hrtime,
  heapUsage,
  gc,

  fn,

  batch = 4096,
  inlineCalls = 4,

  measureGC = true,

  warmupIters = 2,
  warmupThreshold = 5e5,
}) => {
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
  let content = `return${
    // Whether the loop needs to be async
    isLoopAsync ? ' async' : ''
  }(runs,gcs,heaps,threshold=${924_000_000 * (noHeap ? 1 : 1.1)},iters_remain=12)=>{for(let time_min=hrtime()+threshold${
    hasParam ? `,fns=new Array(${batch})` : ''
  };iters_remain>0||hrtime()<time_min;iters_remain--){${
    // Compute params
    hasParam
      ? `{let hrtime_s=hrtime();for(let i=0;i<${batch};i++)fns[i]=fn();${isParamAsync ? 'fns=await Promise.all(fns);' : ''}time_min+=hrtime()-hrtime_s}`
      : ''
  }gc();let ${
    // Start timings
    noHeap ? '' : 'heap=heapUsage(),'
  }hrtime_s=hrtime();`;

  // Setup calls
  {
    let remainingCalls = batch % inlineCalls;

    if (hasParam) {
      const prefix = isFnAsync ? 'await fns[' : 'fns[';

      if (inlineCalls <= batch) {
        content += `for(let i=0;i<${(batch - remainingCalls) / inlineCalls};i++){${prefix}i]()`;
        for (let i = 1, callPrefix = `;${prefix}i+`; i < inlineCalls; i++)
          content += callPrefix + i + ']()';
        content += '}';
      }

      for (let i = batch - remainingCalls; i < batch; i++) content += prefix + i + ']();';
    } else {
      const call = isFnAsync ? 'await fn();' : 'fn();';
      content += `for(let i=0;i<${(batch - remainingCalls) / inlineCalls};i++){${call.repeat(inlineCalls)}}`;

      while (remainingCalls-- > 0) content += call;
    }
  }

  // Compute results
  const hrtimeRes = batch > 1 ? `(hrtime_e-hrtime_s)/${batch}` : 'hrtime_e-hrtime_s';
  content += `let hrtime_e=hrtime();runs.push(${hrtimeRes});${
    // Stop tracking heap usage
    noHeap
      ? ''
      : `heap=heapUsage()-heap;heaps.push(heap>0?${batch > 1 ? `heap/${batch}` : 'heap'}:0);`
  }${
    // Whether to measure iteration GC
    measureGC ? `hrtime_s=hrtime();gc();hrtime_e=hrtime();gcs.push(${hrtimeRes});` : ''
  }}}`;

  const loop: Loop | AsyncLoop = Function(
    'hrtime',
    'heapUsage',
    'gc',
    'fn',
    content,
  )(hrtime, heapUsage, gc, fn);

  // Loop warmup
  isLoopAsync
    ? await loop([], [], [], warmupThreshold, warmupIters)
    : loop([], [], [], warmupThreshold, warmupIters);

  return loop as any;
};
