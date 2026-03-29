type MaybePromise<T> = T | Promise<T>;
export type BenchFn = () => MaybePromise<void | (() => MaybePromise<void>)>;

/**
 * Loop options.
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
export const createLoop: <const F extends BenchFn>(
  options: Options<F>,
) => Promise<
  ReturnType<F> extends Promise<any>
    ? AsyncLoop
    : ReturnType<F> extends () => Promise<any>
      ? AsyncLoop
      : Loop
> = async ({
  hrtime,
  heapUsage,
  gc,

  fn,

  batch = 4096,
  inlineCalls = 4,

  measureGC,

  warmupMinIters = 2,
  warmupThreshold = 5e5,
}) => {
  let isFnAsync: boolean,
    // 1: is param, 11: is param and async
    paramFn: number = 0,
    noHeap = heapUsage == null;

  // Detect async
  {
    let res: any = fn();
    (isFnAsync = res instanceof Promise) && (res = await res);

    if (typeof res === 'function') {
      paramFn = isFnAsync ? 3 : 1;

      res = res();
      (isFnAsync = res instanceof Promise) && (res = await res);
    }
  }

  const isLoopAsync = isFnAsync || (paramFn >>> 1) & 1;

  // Build loop
  let content = `return${
    // Whether the loop needs to be async
    isLoopAsync ? ' async' : ''
  }(runs,gcs,heaps,threshold=${924000000 * (noHeap ? 1 : 1.1)},iters_remain=12)=>{for(let time_min=hrtime()+threshold${
    paramFn & 1 ? `,fns=new Array(${batch})` : ''
  };iters_remain>0||hrtime()<time_min;iters_remain--){`;

  // Compute params
  paramFn & 1 &&
    (content += `{let hrtime_s=hrtime();for(let i=0;i<${batch};i++){fns[i]=${(paramFn >>> 1) & 1 ? 'await ' : ''}fn()}time_min+=hrtime()-hrtime_s}`);

  // Start measuring
  content += `gc();let ${
    // Start tracking heap usage
    noHeap ? '' : 'heap=heapUsage(),'
  }hrtime_s=hrtime();`;

  // Setup calls
  {
    let remainingCalls = batch % inlineCalls;

    if (paramFn & 1) {
      const prefix = isFnAsync ? 'await fns[' : 'fns[';

      {
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
      : `heap=heapUsage()-heap;heaps.push(heap<0?0:${batch > 1 ? `heap/${batch}` : 'heap'});`
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
    ? await loop([], [], [], warmupThreshold, warmupMinIters)
    : loop([], [], [], warmupThreshold, warmupMinIters);

  return loop as any;
};
