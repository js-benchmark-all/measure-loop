import { evaluate } from 'runtime-compiler';
import { IS_AOT } from 'runtime-compiler/env';

export interface CompileOptions {
  /**
   * Number of calls in an iteration.
   *
   * Defaults to `4096`.
   */
  batch?: number;

  /**
   * Number of calls to inline in an iteration.
   *
   * Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Whether to collect GC timings.
   *
   * Enable this option can reduce timing accuracy.
   *
   * Defaults to `false`.
   */
  measureGC?: boolean;

  /**
   * Whether to only `gc()` once instead of in every iteration.
   *
   * Enable this option when benchmarking code with few allocations to increase accuracy.
   */
  gcOnce?: boolean;
}

export interface MeasureOptions extends CompileOptions {
  /**
   * Warmup iterations.
   *
   * Defaults to `16`.
   */
  warmupIters?: number;

  /**
   * Iterations.
   *
   * Defaults to `128`.
   */
  iters?: number;
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
   * Actual calls count.
   */
  calls: number;

  /**
   * Iteration count.
   */
  iters: number;

  /**
   * GC time samples.
   */
  gcs: number[] | undefined;
}

export type Loop = (
  hrtime: () => number,
  gc: () => void,
  fn: () => any,
  params: readonly ((idx: number) => any)[],
  iters: number,
) => MeasureResult | Promise<MeasureResult>;

const buildArgs = (idx: string, paramLen: number) => {
  let str = `${constants.PARAMS}0` + idx;
  for (let j = 1; j < paramLen; j++)
    str += ',' + constants.PARAMS + j + idx;
  return str;
};

/**
 * Benchmark a function.
 */
export const compileLoop: <
  const Params extends readonly ((idx: number) => any)[],
>(
  params: Params,
  fn: (
    ...args: {
      [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
    }
  ) => any,
  options: CompileOptions,
) => Promise<Loop> = async (
  params,
  fn,
  {
    batch = 4096,
    inlineCalls = 4,
    measureGC = false,
    gcOnce = false,
  },
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

    loopVars = `,${constants.PARAMS}0=new Array(${batch})`;
    paramContent = `for(let i=0;i<${batch};i++){`;

    for (let i = 0; i < paramLen; i++) {
      paramContent +=
        i > 0 ? ';' + constants.PARAMS + i : `${constants.PARAMS}0`;
      i > 0 &&
        (loopVars += `,${constants.PARAMS + i}=new Array(${batch})`);

      const res = params[i](i);
      if (res instanceof Promise) {
        isParamAsync = true;

        paramContent += `[i]=await ${constants.FN_PARAMS}[${i}](i)`;
        builtParams[i] = await res;
      } else {
        paramContent += `[i]=${constants.FN_PARAMS}[${i}](i)`;
        builtParams[i] = res;
      }
    }

    paramContent += '}';

    const res = fn(...(builtParams as any));
    (isFnAsync = res instanceof Promise) && (await res);
  } else {
    loopVars = '';

    // @ts-ignore
    const res = fn();
    (isFnAsync = res instanceof Promise) && (await res);
  }

  // We don't need content after this point
  if (IS_AOT) return evaluate();

  const isLoopAsync = isFnAsync || isParamAsync;

  // Build loop
  let content =
    (isLoopAsync ? 'return async' : 'return') +
    `(${constants.FN_HRTIME},${constants.FN_GC},${constants.FN},${constants.FN_PARAMS},${constants.ITERS})=>{let ${constants.RUNS}=new Array(${constants.ITERS}),${constants.GCS}${
      measureGC ? `=new Array(${constants.ITERS})` : ''
    };${
      // Run gc later when creating params
      hasParam && !gcOnce ? '' : constants.RUN_GC
    }for(let ${constants.CURRENT_ITER}=0${
      // Declare params store
      loopVars
    };${constants.CURRENT_ITER}<${constants.ITERS};${constants.CURRENT_ITER}++){${
      // Create params and run GC if needed
      hasParam
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
    content += `${constants.HRTIME_MARK_END}${constants.RUNS}[${constants.CURRENT_ITER}]=${hrtimeRes}`;

    if (measureGC)
      content += `;${constants.HRTIME_RESET_START + constants.RUN_GC + constants.HRTIME_RESET_END + constants.GCS}[${constants.CURRENT_ITER}]=${hrtimeRes}`;
    else gcOnce || (content += ';' + constants.RUN_GC);
  }

  content += `}return{runs:${constants.RUNS},gcs:${constants.GCS},calls:${constants.ITERS}*${batch},iters:${constants.ITERS}}}`;

  return evaluate(content);
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
  loop?: Loop
) => Promise<
  MeasureResult &
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
  options = {},
  loop
) => {
  loop ??= await compileLoop(params, fn, options);

  let { warmupIters = 16, iters = 128 } = options,
    isLoopAsync = false,
    warmupRes = loop(hrtime, gc, fn, params, warmupIters);
  if (warmupRes instanceof Promise) {
    isLoopAsync = true;
    await warmupRes;
  }

  const res = isLoopAsync
    ? await loop(hrtime, gc, fn, params, iters)
    : loop(hrtime, gc, fn, params, iters);

  return res as any;
};
