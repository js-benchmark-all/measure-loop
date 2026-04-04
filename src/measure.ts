export type BenchFnResult = void | (() => void | Promise<void>);
export type BenchFn = () => BenchFnResult | Promise<BenchFnResult>;

export interface MeasureResult {
  runtimes: number[];
  gcs: number[];
}

/**
 * Describe measure options.
 */
export interface MeasureOptions {
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
   * Min time to run the benchmark.
   */
  threshold?: number;

  /**
   * Min benchmark iterations.
   */
  iters?: number;

  /**
   * Min time to warmup the benchmark.
   */
  warmupThreshold?: number;

  /**
   * Min warmup iterations.
   */
  warmupIters?: number;

  /**
   * Min samples count.
   */
  samples?: number;
}

/**
 * Benchmark a function.
 */
export const measure: (
  fn: BenchFn,
  gc: () => void,
  hrtime: () => number,
  options?: MeasureOptions,
) => Promise<MeasureResult> = async (
  fn,
  gc,
  hrtime,
  {
    batch = 4096,
    inlineCalls = 4,
    measureGC,
    threshold = 924e6,
    iters = 12,
    warmupThreshold = 5e5,
    warmupIters = 2,
    samples = 100,
  } = {},
) => {
  let isFnAsync: boolean,
    hasParam = false,
    isParamAsync = false;

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
  let content = `{let{0:${constants.FN_HRTIME},1:${constants.FN_GC},2:${constants.FN}}=__measure_loop_dat__;${
    // Whether the loop needs to be async
    isLoopAsync ? 'async' : ''
  }(${constants.THRESHOLD},${constants.MIN_ITERS})=>{let runtimes=[],gcs=[];${constants.THRESHOLD}+=${constants.HRTIME};for(${
    // Store dynamic params
    hasParam ? `let ${constants.PARAMS}=new Array(${batch})` : ''
  };${constants.MIN_ITERS}>0||${constants.HRTIME}<${constants.THRESHOLD}||runtimes.length<${samples};${constants.MIN_ITERS}--){${
    // Compute params
    hasParam
      ? `{${constants.HRTIME_MARK_START}for(let i=0;i<${batch};i++)${constants.PARAMS}[i]=${constants.FN}();${
          // Compute concurrently
          isParamAsync ? `${constants.PARAMS}=await Promise.all(${constants.PARAMS});` : ''
        }${constants.HRTIME_MARK_END}${constants.THRESHOLD}+=${constants.HRTIME_DIFF}}`
      : ''
  }${constants.RUN_GC + constants.HRTIME_MARK_START}`;

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
  content += `${constants.HRTIME_MARK_END}runtimes.push(${hrtimeRes})`;

  // Measure gc time
  measureGC &&
    (content += `;{${constants.HRTIME_MARK_START + constants.RUN_GC + constants.HRTIME_MARK_END}gcs.push(${hrtimeRes})}`);

  // @ts-ignore
  globalThis.__measure_loop_dat__ = [hrtime, gc, fn];
  const loop = (0, eval)(content + `}return{runtimes,gcs}}}`);
  // @ts-ignore
  delete globalThis.__measure_loop_dat__;

  isLoopAsync ? await loop(warmupThreshold, warmupIters) : loop(warmupThreshold, warmupIters);
  return loop(threshold, iters);
};
