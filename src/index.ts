export type Params = (() => any)[];

/**
 * Loop options.
 */
export interface Options<P extends Params = Params, R = any> {
  hrtime: () => number;
  heapUsage?: () => number;
  gc: () => void;

  /**
   * Function parameters.
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
   * Number of iterations
   */
  iters: number;

  /**
   * Number of calls in an iteration.
   */
  batch: number;

  /**
   * Number of calls or concurrent calls to inline. Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Number of calls to run concurrently in every iteration.
   */
  concurrentBatch?: number;

  /**
   * Whether to measure GC time.
   */
  measureGC?: boolean;

  /**
   * Max duration in ns.
   */
  maxDuration?: number;
}

/**
 * Sync loop
 */
export type Loop = (runs: number[], gcs: number[], heaps: number[]) => void;

/**
 * Async loop
 */
export type AsyncLoop = (runs: number[], gcs: number[], heaps: number[]) => Promise<void>;

export const createLoop = async <const P extends Params = [], R = any>({
  hrtime,
  heapUsage,
  gc,

  params,
  fn,

  iters,
  batch,
  inlineCalls,
  concurrentBatch,

  measureGC,

  maxDuration,
}: Options<P, R>): Promise<R | ReturnType<P[number]> extends Promise<any> ? AsyncLoop : Loop> => {
  let isFnAsync: boolean,
    paramLen = params?.length ?? 0,
    noHeap = heapUsage == null,
    isParamAsync = false;

  // Detect
  {
    let res;
    if (paramLen > 0) {
      let ps = new Array(paramLen);
      for (let i = 0; i < paramLen; i++) isParamAsync ||= (ps[i] = params![i]()) instanceof Promise;
      isFnAsync =
        (res = fn(
          ...// Wait for params
          ((isParamAsync ? await Promise.all(ps) : ps) as any),
        )) instanceof Promise;
    } else
      isFnAsync =
        // @ts-ignore
        (res = fn()) instanceof Promise;
    isFnAsync && (await res);
  }

  // Build loop
  let content = `return ${
    // Whether the loop needs to be async
    isFnAsync || isParamAsync ? 'async' : ''
  }(runs,gcs,heaps)=>{var hrtime_noop;{let s=hrtime(),e=hrtime();hrtime_noop=e-s}for(let iter=0,duration_max=hrtime()+${maxDuration ?? 1284000000};iter<${iters};iter++){if(hrtime()>duration_max)break;`;

  let args = '';

  // Parse params
  if (paramLen > 0) {
    // Add args
    args = 'params_0';

    if (isParamAsync) {
      if (paramLen > 1) {
        content += 'let{0:params_0';

        for (let i = 0; i < paramLen; i++) {
          // Add args
          args += `,params_${i}`;
          content += `,${i}:params_${i}`;
        }

        content += '}=await Promise.all(params.map(f=>f()));';
      } else content += 'let params_0=await params[0]();';
    } else {
      content += 'let params_0=params[0]()';
      for (let i = 1; i < paramLen; i++) {
        // Add args
        args += `,params_${i}`;
        content += `,params_${i}=params[${i}]()`;
      }
      content += ';';
    }
  }

  // Measure fn
  content += `gc();${
    // Start tracking heap usage
    noHeap ? '' : 'let heap_s=heapUsage();'
  }let hrtime_s=hrtime();`;

  // Inline calls
  {
    let call: string,
      callCnt = batch;

    if (isFnAsync) {
      // Concurrently run `concurrentBatch` calls
      if ((concurrentBatch ?? 1) > 1) {
        const begin = `await Promise.all([fn(${args})`,
          res = `,fn(${args})`;

        call = begin;
        for (let i = 1; i < concurrentBatch!; i++) call += res;
        call += ']);';

        // Concurrently run remainingCalls
        let remainingCalls = batch % concurrentBatch!;
        if (remainingCalls > 0) {
          content += begin;
          for (let i = 1; i < remainingCalls; i++) content += res;
          content += ']);';
        }

        callCnt = (batch - remainingCalls) / concurrentBatch!;
      } else call = `await fn(${args});`;
    } else call = `fn(${args});`;

    inlineCalls ??= 4;
    let remainingCalls = callCnt % inlineCalls;
    const batchedCall = call.repeat(inlineCalls);

    content += `for(let i=0;i<${(callCnt - remainingCalls) / inlineCalls};i++){${batchedCall}}`;
    while (remainingCalls-- > 0) content += call;
  }

  content += `let hrtime_e=hrtime();runs.push(${
    batch > 1 ? `(hrtime_e-hrtime_s-hrtime_noop)/${batch}` : 'hrtime_e-hrtime_s-hrtime_noop'
  });${
    // Stop tracking heap usage
    noHeap
      ? ''
      : `let heap_e=heapUsage();heap_e>heap_s&&heaps.push(${
          batch > 1 ? `(heap_e-heap_s)/${batch}` : 'heap_e-heap_s'
        });`
  }${
    // Whether to measure iteration GC
    measureGC
      ? `hrtime_s=hrtime();gc();hrtime_e=hrtime();gcs.push(hrtime_e-hrtime_s-hrtime_noop);`
      : ''
  }}}`;

  const loop = Function(
    'hrtime',
    'heapUsage',
    'gc',
    'params',
    'fn',
    content,
  )(hrtime, heapUsage, gc, params, fn);

  // Loop warmup
  isFnAsync || isParamAsync ? await loop([], [], []) : loop([], [], []);

  return loop;
};
