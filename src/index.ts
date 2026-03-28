export type Params = (() => any)[];

export interface Options<P extends Params = Params, R = any> {
  // Measurement functions
  hrtime: () => number;
  heapUsage?: () => number;
  gc: () => void;

  // Target to measure
  params?: P;
  fn: (
    ...args: {
      [K in keyof P]: K extends number ? Awaited<ReturnType<P[K]>> : P[K];
    }
  ) => R;

  // Iteration options
  iters: number;
  batchIters: number;
}

export type Loop = (runs: number[], gcs: number[], heaps: number[]) => void;
export type AsyncLoop = (runs: number[], gcs: number[], heaps: number[]) => Promise<void>;

export const createLoop = async <P extends Params = Params, R = any>({
  hrtime,
  heapUsage,
  gc,

  params,
  fn,

  iters,
  batchIters
}: Options<P, R>): Promise<
  R | ReturnType<P[number]> extends Promise<any>
    ? AsyncLoop
    : Loop
> => {
  let isFnAsync: boolean,
    paramLen = params?.length ?? 0,
    noHeap = heapUsage == null,
    isParamAsync = false;

  // Detect
  {
    let res;
    if (paramLen > 0) {
      let ps = new Array(paramLen);
      for (let i = 0; i < paramLen; i++)
        isParamAsync ||= (ps[i] = params![i]()) instanceof Promise;
      isFnAsync =
        (res = fn(
          ...// Wait for params
          ((isParamAsync ? await Promise.all(ps) : ps) as any),
        )) instanceof Promise;
    } else isFnAsync = (
      // @ts-ignore
      res = fn()
    ) instanceof Promise;
    isFnAsync && await res;
  }

  // Build loop
  let content = `return ${
    // Whether the loop needs to be async
    isFnAsync || isParamAsync ? 'async' : ''
  }(runs,gcs,heaps)=>{var hrtime_noop;{let s,e;s=hrtime();e=hrtime();hrtime_noop=e-s}for(let iter=0;iter<${iters};iter++){`;

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
      }
      else content += 'let params_0=await params[0]();'
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
  content += `gc();let hrtime_s,hrtime_e${
    // Start tracking heap usage
    noHeap ? '' : ',heap_e,heap_s=heapUsage()'
  };hrtime_s=hrtime();`;
  if (isFnAsync) {
    if (batchIters > 1) {
      content += 'await Promise.all(['
      for (let i = 0, call = `fn(${args}),`; i < batchIters; i++)
        content += call;
      content += ']);'
    } else content += `await fn(${args});`
  } else
    for (let i = 0, call = `fn(${args});`; i < batchIters; i++)
      content += call;

  const hrtimeRes = batchIters > 1 ? `Math.ceil((hrtime_e-hrtime_s-hrtime_noop)/${batchIters})` : 'hrtime_e-hrtime_s-hrtime_noop';
  const heapRes = batchIters > 1 ? `Math.ceil((heap_e-heap_s)/${batchIters})` : 'heap_e-heap_s'

  content += `hrtime_e=hrtime();runs.push(${hrtimeRes});${
    // Stop tracking heap usage
    noHeap ? '' : `heap_e=heapUsage();heap_e>heap_s&&heaps.push(${heapRes});`
  }hrtime_s=hrtime();gc();hrtime_e=hrtime();gcs.push(${hrtimeRes})}}`;

  return Function(
    'hrtime', 'heapUsage', 'gc', 'params', 'fn',
    content
  )(hrtime, heapUsage, gc, params, fn);
};
