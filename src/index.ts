export type Params = (() => any)[];

/**
 * Loop options.
 */
export interface Options<P extends Params = Params, R = any> {
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
   * Dynamic parameters. Use this to prevent loop invariant code motion optimization.
   *
   * @example
   * ```ts
   * {
   *   const str = 'abc';
   *   createLoop({
   *     ...,
   *     fn: () => {
   *       createSideEffect(str.includes('c'));
   *     }
   *   });
   *   // Get optimized to
   *   const $0 = 'abc'.includes('c');
   *   createLoop({
   *     ...,
   *     fn: () => {
   *       createSideEffect($0);
   *     }
   *   });
   * }
   *
   * // Do this instead
   * createLoop({
   *   ...,
   *   params: [() => 'abc'],
   *   fn: (str) => {
   *     createSideEffect(str.includes('c'));
   *   }
   * });
   * ```
   */
  params?: P;

  /**
   * Function to benchmark.
   */
  fn: (
    ...args: {
      [K in keyof P]: Awaited<ReturnType<P[K]>>;
    }
  ) => R;

  /**
   * Number of calls in an iteration. Defaults to `4096`.
   */
  batch?: number;

  /**
   * Number of calls to inline. Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Whether to measure GC time.
   */
  measureGC?: boolean;

  /**
   * Min number of warmup iterations. Defaults to `2`.
   */
  warmupMinIters?: number;

  /**
   * Warmup threshold. Defaults to `5e5`.
   */
  warmupThreshold?: number;
}

export type Loop = (
  runs: number[],
  gcs: number[],
  heaps: number[],
  threshold?: number,
  minIter?: number,
) => void;
export type AsyncLoop = (
  runs: number[],
  gcs: number[],
  heaps: number[],
  threshold?: number,
  minIter?: number,
) => Promise<void>;

/**
 * Create a benchmark loop
 */
export const createLoop: <const P extends Params = [], R = any>(
  options: Options<P, R>,
) => Promise<
  R extends Promise<any> ? AsyncLoop : ReturnType<P[number]> extends Promise<any> ? AsyncLoop : Loop
> = async ({
  hrtime,
  heapUsage,
  gc,

  params,
  fn,

  batch = 4096,
  inlineCalls = 4,

  measureGC,

  warmupMinIters = 2,
  warmupThreshold = 5e5,
}) => {
  let isFnAsync: boolean,
    paramLen = params?.length ?? 0,
    noHeap = heapUsage == null,
    asyncParams = 0;

  if (paramLen > 31) throw new Error('cannot have more than 31 params!');

  // Detect async
  {
    let res;
    if (paramLen > 0) {
      let ps = new Array(paramLen);
      for (let i = 0; i < paramLen; i++)
        asyncParams |= (ps[i] = params![i]()) instanceof Promise ? 1 << i : 0;

      isFnAsync =
        (res = fn(
          ...// Wait for params
          ((asyncParams > 0 ? await Promise.all(ps) : ps) as any),
        )) instanceof Promise;
    } else {
      isFnAsync =
        // @ts-ignore
        (res = fn()) instanceof Promise;
    }
    isFnAsync && (await res);
  }

  // Build loop
  let content = `return${
    // Whether the loop needs to be async
    isFnAsync || asyncParams > 0 ? ' async' : ''
  }(runs,gcs,heaps,threshold=${924000000 * (noHeap ? 1 : 1.1)},iters_remain=12)=>{for(let `;

  // Declare param array for batches
  for (let i = 0; i < paramLen; i++) content += `params_${i}=new Array(${batch}),`;

  content += `time_min=hrtime()+threshold;iters_remain>0||hrtime()<time_min;iters_remain--){`;

  // Compute params
  if (paramLen > 0) {
    // Adjust the duration
    content += `{let hrtime_s=hrtime();for(let i=0;i<${batch};i++){`;
    for (let i = 0; i < paramLen; i++)
      content += `params_${i}[i]=${(asyncParams >>> i) & 1 ? 'await ' : ''}params[${i}]();`;
    content += `}time_min+=hrtime()-hrtime_s}`;
  }

  // Start measuring
  content += `gc();let ${
    // Start tracking heap usage
    noHeap ? '' : 'heap=heapUsage(),'
  }hrtime_s=hrtime();`;

  // Setup calls
  {
    let remainingCalls = batch % inlineCalls;

    if (paramLen > 0) {
      const callStart = isFnAsync ? 'await fn(' : 'fn(';

      // Inline batch
      if (paramLen > 1) {
        let call = callStart + 'params_0[i]';
        for (let i = 1; i < paramLen; i++) call += `,params_${i}[i]`;
        call += ');i++;';

        content += `for(let i=0;i<${batch - remainingCalls};){${call.repeat(inlineCalls)}}`;
      } else {
        // Fast path for 1 param
        content += `for(let i=0;i<${batch - remainingCalls};i+=${inlineCalls}){${callStart}params_0[i])`;
        for (let i = 1, callArgStart = ';' + callStart + 'params_0[i+'; i < inlineCalls; i++)
          content += callArgStart + i + '])';
        content += '}';
      }

      // Inline remainingCalls
      for (let i = batch - remainingCalls; i < batch; i++) {
        const offsetAccess = `[${i}]`;

        content += callStart + 'params_0' + offsetAccess;
        for (let i = 1; i < paramLen; i++) content += ',params_' + i + offsetAccess;
        content += ');';
      }
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
      : `heap=heapUsage()-heap;heaps.push(heap<0?0:${batch > 1 ? `heap/${batch}` : 'heap'});`
  }${
    // Whether to measure iteration GC
    measureGC ? `hrtime_s=hrtime();gc();hrtime_e=hrtime();gcs.push(${hrtimeRes});` : ''
  }}}`;

  const loop: Loop | AsyncLoop = Function(
    'hrtime',
    'heapUsage',
    'gc',
    'params',
    'fn',
    content,
  )(hrtime, heapUsage, gc, params, fn);

  // Loop warmup
  isFnAsync || asyncParams > 0
    ? await loop([], [], [], warmupThreshold, warmupMinIters)
    : loop([], [], [], warmupThreshold, warmupMinIters);

  return loop as any;
};
