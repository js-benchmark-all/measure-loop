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
   * Number of calls in an iteration.
   */
  batch?: number;

  /**
   * Number of calls or concurrent calls to inline. Defaults to `4`.
   */
  inlineCalls?: number;

  /**
   * Whether to measure GC time.
   */
  measureGC?: boolean;

  /**
   * Max duration to run the benchmark in ns.
   */
  maxDuration?: number;

  /**
   * Duration to subtract from all runs result.
   */
  noopDuration?: number;
}

/**
 * Sync loop
 */
export type Loop = (runs: number[], gcs: number[], heaps: number[]) => void;

/**
 * Async loop
 */
export type AsyncLoop = (runs: number[], gcs: number[], heaps: number[]) => Promise<void>;

/**
 * Create a benchmark loop
 */
export const createLoop = async <const P extends Params = [], R = any>({
  hrtime,
  heapUsage,
  gc,

  params,
  fn,

  batch = 4096,
  inlineCalls = 4,

  measureGC,

  maxDuration,
  noopDuration = 0,
}: Options<P, R>): Promise<R | ReturnType<P[number]> extends Promise<any> ? AsyncLoop : Loop> => {
  let isFnAsync: boolean,
    paramLen = params?.length ?? 0,
    noHeap = heapUsage == null,
    asyncParams = 0;

  if (paramLen > 31) throw new Error('cannot have more than 31 params!');

  // Calculate max duration if not exists
  {
    // Calculate noop time
    let hrtime_s = hrtime(),
      hrtime_e = hrtime();
    noopDuration += hrtime_e - hrtime_s;

    // Detect
    {
      let res;
      if (paramLen > 0) {
        let ps = new Array(paramLen);
        for (let i = 0; i < paramLen; i++)
          asyncParams |= (ps[i] = params![i]()) instanceof Promise ? 1 << i : 0;

        hrtime_s = hrtime();
        isFnAsync =
          (res = fn(
            ...// Wait for params
            ((asyncParams > 0 ? await Promise.all(ps) : ps) as any),
          )) instanceof Promise;
      } else {
        hrtime_s = hrtime();
        isFnAsync =
          // @ts-ignore
          (res = fn()) instanceof Promise;
      }
      isFnAsync && (await res);
      hrtime_e = hrtime();
    }

    maxDuration ??= (hrtime_e - hrtime_s - noopDuration) * batch * 6;
  }

  // Build loop
  let content = `return${
    // Whether the loop needs to be async
    isFnAsync || asyncParams > 0 ? ' async' : ''
  }(runs,gcs,heaps)=>{for(let `;

  // Declare param array for batches
  for (let i = 0; i < paramLen; i++) content += `params_${i}=new Array(${batch}),`;

  content += `duration_max=hrtime()+${maxDuration};hrtime()<duration_max;){`;

  // Calculate params
  if (paramLen > 0) {
    // Adjust the duration
    content += `{let hrtime_s=hrtime();for(let i=0;i<${batch};i++){`;
    for (let i = 0; i < paramLen; i++)
      content += `params_${i}[i]=${(asyncParams >>> i) & 1 ? 'await ' : ''}params[${i}]();`;
    content += `}duration_max+=hrtime()-hrtime_s-${noopDuration}}`;
  }

  // Start measuring
  content += `gc();let ${
    // Start tracking heap usage
    noHeap ? '' : 'heap=heapUsage(),'
  }hrtime_s=hrtime();`;

  // Inline calls
  {
    let remainingCalls = batch % inlineCalls;

    if (paramLen > 0) {
      const callStart = isFnAsync ? 'await fn(' : 'fn(';

      // Inline batch
      {
        let call = callStart + 'params_0[i]';
        for (let i = 1; i < paramLen; i++) call += `,params_${i}[i]`;
        call += ');i++;';

        content += `for(let i=0;i<${batch - remainingCalls};){${call.repeat(inlineCalls)}}`;
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

  // Calculate results
  const hrtimeRes =
    batch > 1
      ? `(hrtime_e-hrtime_s-${noopDuration})/${batch}`
      : 'hrtime_e-hrtime_s-' + noopDuration;
  content += `let hrtime_e=hrtime();runs.push(${hrtimeRes});${
    // Stop tracking heap usage
    noHeap
      ? ''
      : `heap=heapUsage()-heap;heaps.push(heap<0?0:${batch > 1 ? `heap/${batch}` : 'heap'});`
  }${
    // Whether to measure iteration GC
    measureGC ? `hrtime_s=hrtime();gc();hrtime_e=hrtime();gcs.push(${hrtimeRes});` : ''
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
  isFnAsync || asyncParams > 0 ? await loop([], [], []) : loop([], [], []);

  return loop;
};
