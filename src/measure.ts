/**
 * Describe measured result.
 */
export interface MeasureResult {
  /**
   * Runtime samples.
   */
  runtimes: number[];

  /**
   * GC time samples.
   */
  gcs: number[];

  /**
   * Debug info.
   */
  debug?: {
    content: string;
  };
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
   * Min time in nanoseconds to run the benchmark.
   */
  threshold?: number;

  /**
   * Min benchmark iterations.
   */
  iters?: number;

  /**
   * Min time in nanoseconds to warmup the benchmark.
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
}

const buildArgs = (idx: string, paramLen: number) => {
  let str = `${constants.PARAMS}0` + idx;

  for (let j = 1; j < paramLen; j++) str += ',' + constants.PARAMS + j + idx;

  return str;
};

/**
 * Benchmark a function.
 */
export const measure: <const Params extends (() => any)[]>(
  params: Params,
  fn: (
    ...args: {
      [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
    }
  ) => any,
  gc: () => void,
  hrtime: () => number,
  options?: MeasureOptions,
) => Promise<MeasureResult> = async (
  params,
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

    debug,
  } = {},
) => {
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
      paramContent += i > 0 ? ';' + constants.PARAMS + i : `${constants.PARAMS}0`;
      i > 0 && (loopVars += `,${constants.PARAMS + i}=new Array(${batch})`);

      const res = params[i]();
      if ((isParamAsync ||= res instanceof Promise)) {
        paramContent += `[i]=await ${constants.FN_PARAMS}[${i}]()`;
        builtParams[i] = await res;
      } else {
        paramContent += `[i]=${constants.FN_PARAMS}[${i}]()`;
        builtParams[i] = res;
      }
    }

    paramContent += `}${constants.HRTIME_MARK_END}${constants.THRESHOLD}+=${constants.HRTIME_DIFF}}`;

    const res = fn(...(builtParams as any));
    (isFnAsync = res instanceof Promise) && (await res);
  } else {
    loopVars = '';
    paramContent = '';

    // @ts-ignore
    const res = fn();
    (isFnAsync = res instanceof Promise) && (await res);
  }

  const isLoopAsync = isFnAsync || isParamAsync;

  // Build loop
  let content = `(${constants.FN_HRTIME},${constants.FN_GC},${constants.FN},${constants.FN_PARAMS})=>${
    // Whether the loop needs to be async
    isLoopAsync ? 'async' : ''
  }(${constants.THRESHOLD},${constants.MIN_ITERS})=>{let runtimes=[],gcs=[];${constants.THRESHOLD}+=${constants.HRTIME};for(${
    // Declare params store
    loopVars
  };${constants.MIN_ITERS}>0||${constants.HRTIME}<${constants.THRESHOLD};${constants.MIN_ITERS}--){${
    // Build params
    paramContent
  }${constants.RUN_GC}${constants.HRTIME_MARK_START}`;

  // Setup calls
  {
    const remainingCalls = batch % inlineCalls;

    if (hasParam) {
      const callPrefix = isFnAsync ? `await ${constants.FN}(` : constants.FN + '(';

      for (let i = 0; i < remainingCalls; i++)
        content += callPrefix + buildArgs(`[${i}]`, paramLen) + ');';

      if (inlineCalls <= batch) {
        content += `for(let i=${remainingCalls};i<${batch};i+=${inlineCalls}){${
          // Build first call
          callPrefix + buildArgs('[i]', paramLen)
        })`;

        for (let i = 1, prefix = ';' + callPrefix; i < inlineCalls; i++)
          content += prefix + buildArgs(`[i+${i}]`, paramLen) + ')';

        content += '}';
      }
    } else {
      const call = isFnAsync ? `await ${constants.FN}();` : `${constants.FN}();`;
      remainingCalls > 0 && (content += call.repeat(remainingCalls));
      inlineCalls <= batch &&
        (content += `for(let i=0;i<${(batch - remainingCalls) / inlineCalls};i++){${call.repeat(inlineCalls)}}`);
    }
  }

  // Compute results
  {
    const hrtimeRes = batch > 1 ? `(${constants.HRTIME_DIFF})/${batch}` : constants.HRTIME_DIFF;
    content += `${constants.HRTIME_MARK_END}runtimes.push(${hrtimeRes})`;

    measureGC &&
      (content += `;${constants.HRTIME_RESET_START + constants.RUN_GC + constants.HRTIME_RESET_END}gcs.push(${hrtimeRes})`);
  }

  content += `}return{runtimes,gcs}}`;

  const loop = (0, eval)(content)(hrtime, gc, fn, params);
  isLoopAsync ? await loop(warmupThreshold, warmupIters) : loop(warmupThreshold, warmupIters);

  const res = isLoopAsync ? await loop(threshold, iters) : loop(threshold, iters);
  debug && (res.debug = { content });
  return res;
};

export const mergeMeasureOptions = (
  origin: MeasureOptions | undefined,
  more: MeasureOptions | undefined,
): MeasureOptions | undefined => (origin ? (more ? Object.assign(origin, more) : origin) : more);
