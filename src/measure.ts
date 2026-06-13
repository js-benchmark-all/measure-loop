export interface DebugInfo {
  /**
   * Generated benchmark loop.
   */
  content: string;
}

/**
 * Describe measured result.
 */
export interface MeasureResult {
  /**
   * Runtime samples in milliseconds.
   */
  runs: number[];

  /**
   * Iteration count.
   */
  iters: number;

  /**
   * Actual calls count.
   */
  calls: number;

  /**
   * GC time samples.
   */
  gcs: number[] | undefined;

  /**
   * Debug info.
   */
  debug?: DebugInfo;
}

/**
 * Describe measure options.
 *
 * - Warmup stops when either `warmupThreshold` or `warmupIters` is reached.
 * - The run stops when either `threshold` or `iters` is reached.
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
   * Min time in milliseconds to run the benchmark.
   */
  threshold?: number;

  /**
   * Min benchmark iterations.
   */
  iters?: number;

  /**
   * Min time in milliseconds to warmup the benchmark.
   */
  warmupThreshold?: number;

  /**
   * Min warmup iterations.
   */
  warmupIters?: number;

  /**
   * Whether to include debug info in output.
   */
  debug?: boolean;

  /**
   * Whether to only `gc()` once instead of in every iteration.
   */
  gcOnce?: boolean;
}

const buildArgs = (idx: string, paramLen: number) => {
  let str = `${constants.PARAMS}0` + idx;
  for (let j = 1; j < paramLen; j++)
    str += ',' + constants.PARAMS + j + idx;
  return str;
};

/**
 * Benchmark a function.
 */
export const measure: <
  const Params extends ((idx: number) => any)[],
  Options extends MeasureOptions,
>(
  params: Params,
  fn: (
    ...args: {
      [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
    }
  ) => any,
  gc: () => void,
  hrtime: () => number,
  options?: Options,
) => Promise<
  // debug info
  (Options extends { debug: true }
    ? MeasureResult & {
        debug: DebugInfo;
      }
    : MeasureResult) &
    // measure gc
    {
      gcs: Options extends { measureGC: true } ? number[] : undefined;
    }
> = async (
  params,
  fn,
  gc,
  hrtime,
  // @ts-ignore
  {
    batch = 4096,
    inlineCalls = 4,

    measureGC = false,

    threshold = 256,
    iters = 32,

    warmupThreshold = 64,
    warmupIters = 8,

    debug,
    gcOnce = false,
  } = {},
) => {
  gcOnce &&
    measureGC &&
    console.warn('gcOnce has no effect when measureGC is on.');

  let isFnAsync: boolean,
    paramLen = params.length,
    hasParam = paramLen > 0,
    isParamAsync = false,
    paramContent: string,
    loopVars: string;

  if (hasParam) {
    const builtParams = new Array(paramLen);

    loopVars = `let ${constants.PARAMS}0=new Array(${batch})`;
    paramContent = `{${constants.HRTIME_MARK_START}for(let i=0;i<${batch};i++){`;

    for (let i = 0; i < paramLen; i++) {
      paramContent +=
        i > 0 ? ';' + constants.PARAMS + i : `${constants.PARAMS}0`;
      i > 0 &&
        (loopVars += `,${constants.PARAMS + i}=new Array(${batch})`);

      const res = params[i](i);
      if ((isParamAsync ||= res instanceof Promise)) {
        paramContent += `[i]=await ${constants.FN_PARAMS}[${i}](i)`;
        builtParams[i] = await res;
      } else {
        paramContent += `[i]=${constants.FN_PARAMS}[${i}](i)`;
        builtParams[i] = res;
      }
    }

    paramContent += `}${constants.HRTIME_MARK_END}${constants.THRESHOLD}+=${constants.HRTIME_DIFF}}`;

    const res = fn(...(builtParams as any));
    (isFnAsync = res instanceof Promise) && (await res);
  } else {
    loopVars = '';

    // @ts-ignore
    const res = fn();
    (isFnAsync = res instanceof Promise) && (await res);
  }

  const isLoopAsync = isFnAsync || isParamAsync;

  // Build loop
  let content =
    (isLoopAsync ? 'async' : '') +
    `(${constants.FN_HRTIME},${constants.FN_GC},${constants.FN},${constants.FN_PARAMS},${constants.THRESHOLD},${constants.MIN_ITERS})=>{let ${constants.RUNS}=new Array(1<<20),${constants.GCS}${
      measureGC ? `=new Array(1<<20)` : ''
    },${constants.ITERS}=0,${constants.CURRENT_TIME}=${constants.HRTIME};${
      // Run gc later when creating params
      paramLen > 0 && !gcOnce ? '' : constants.RUN_GC
    }for(${
      // Declare params store
      loopVars
    };${constants.ITERS}<1048576&&${constants.ITERS}<${constants.MIN_ITERS}||${constants.CURRENT_TIME}<${constants.THRESHOLD};${constants.ITERS}++){${
      // Create params and run GC if needed
      paramLen > 0
        ? gcOnce
          ? paramContent!
          : paramContent! + constants.RUN_GC
        : ''
    }${constants.HRTIME_MARK_START}`;

  {
    const remainingCalls = batch % inlineCalls;

    if (hasParam) {
      const callPrefix = isFnAsync
        ? `await ${constants.FN}(`
        : constants.FN + '(';

      for (let i = 0; i < remainingCalls; i++)
        content += callPrefix + buildArgs(`[${i}]`, paramLen) + ');';

      if (inlineCalls <= batch) {
        content += `for(let i=${remainingCalls};i<${batch};i+=${inlineCalls}){${
          // Build first call
          callPrefix + buildArgs('[i]', paramLen)
        })`;

        for (
          let i = 1, prefix = ';' + callPrefix;
          i < inlineCalls;
          i++
        )
          content += prefix + buildArgs(`[i+${i}]`, paramLen) + ')';

        content += '}';
      }
    } else {
      const call = isFnAsync
        ? `await ${constants.FN}();`
        : `${constants.FN}();`;
      remainingCalls > 0 && (content += call.repeat(remainingCalls));
      inlineCalls <= batch &&
        (content += `for(let i=0;i<${(batch - remainingCalls) / inlineCalls};i++){${call.repeat(inlineCalls)}}`);
    }
  }

  // Compute results
  {
    const hrtimeRes =
      batch > 1
        ? `(${constants.HRTIME_DIFF})/${batch}`
        : constants.HRTIME_DIFF;
    content += `${constants.HRTIME_MARK_END + constants.CURRENT_TIME}+=${constants.HRTIME_DIFF};${constants.RUNS}[${constants.ITERS}]=${hrtimeRes}`;

    if (measureGC)
      content += `;${constants.HRTIME_RESET_START + constants.RUN_GC + constants.HRTIME_RESET_END + constants.GCS}[${constants.ITERS}]=${hrtimeRes}`;
    else gcOnce || (content += ';' + constants.RUN_GC);
  }

  content += `}${constants.RUNS}.length=${
    measureGC ? `${constants.GCS}.length=` : ''
  }${constants.ITERS};return{runs:${constants.RUNS},gcs:${constants.GCS},calls:${constants.ITERS}*${batch},iters:${constants.ITERS}}}`;

  const loop = (0, eval)(content);
  warmupIters > 0 &&
    (isLoopAsync
      ? await loop(
          hrtime,
          gc,
          fn,
          params,
          warmupThreshold,
          warmupIters,
        )
      : loop(hrtime, gc, fn, params, warmupThreshold, warmupIters));

  const res: MeasureResult = isLoopAsync
    ? await loop(hrtime, gc, fn, params, threshold, iters)
    : loop(hrtime, gc, fn, params, threshold, iters);

  // @ts-ignore
  debug && (res.debug = { content });
  return res as any;
};
