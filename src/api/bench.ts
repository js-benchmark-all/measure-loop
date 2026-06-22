import {
  compileLoop,
  measure,
  type Loop,
  type MeasureOptions,
  type MeasureResult,
} from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<
  in out CategoryStore,
  in out BenchStore,
  out CategoryReturn,
  out SubcategoryReturn,
> {
  categoryStart(
    ...args:
      | [id: undefined, parentStore: undefined]
      | [id: string, parentStore: CategoryStore]
  ): CategoryStore | Promise<CategoryStore>;
  categoryEnd(
    ...args:
      | [store: CategoryStore, id: undefined, parentStore: undefined]
      | [store: CategoryStore, id: string, parentStore: CategoryStore]
  ):
    | CategoryReturn
    | Promise<CategoryReturn>
    | SubcategoryReturn
    | Promise<SubcategoryReturn>;

  benchStart(
    id: string,
    parentStore: CategoryStore,
  ): BenchStore | Promise<BenchStore>;
  benchResult(
    store: BenchStore,
    caseId: string,
    result: MeasureResult,
  ): any;
  benchError(store: BenchStore, caseId: string, error: unknown): any;
  benchEnd(
    store: BenchStore,
    id: string,
    parentStore: CategoryStore,
  ): any;
}

export interface RunOptions<
  in out CategoryStore,
  out CategoryReturn,
> {
  reporter: Reporter<CategoryStore, any, CategoryReturn, any>;
  env: RuntimeEnv;
  shuffle?: boolean;
}

export class Bench {
  readonly benchIds: string[];
  readonly benchParams: any[];
  readonly benchFns: any[];
  readonly benchOptionList: any[];
  readonly benchLoops: Promise<Loop>[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.benchIds = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptionList = [];
    this.benchLoops = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it<const Params extends readonly ((idx: number) => any)[]>(
    id: string,
    params: Params,
    fn: (
      ...args: {
        [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
      }
    ) => any,
    options?: MeasureOptions,
  ): this {
    this.benchIds.push(id);
    this.benchParams.push(params);
    this.benchFns.push(fn);
    this.benchOptionList.push(options);
    this.benchLoops.push(compileLoop(params, fn, options ?? {}));
    return this;
  }

  /**
   * Run the benchmark directly without wrapping in a category.
   */
  run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, CategoryReturn>,
    defaultBenchOptions?: MeasureOptions,
  ): Promise<CategoryReturn>;

  /**
   * Run the benchmark in a category.
   */
  run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, CategoryReturn>,
    defaultBenchOptions: MeasureOptions,
    id: string,
    parentStore: CategoryStore,
  ): Promise<void>;

  async run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, CategoryReturn>,
    defaultBenchOptions?: MeasureOptions,
    id?: string,
    parentStore?: CategoryStore,
  ): Promise<any> {
    // Add new options if exists
    this.defaultBenchOptions != null &&
      (defaultBenchOptions =
        defaultBenchOptions != null
          ? {
              ...defaultBenchOptions,
              ...this.defaultBenchOptions,
            }
          : this.defaultBenchOptions);

    const {
      reporter,
      env: { gc, hrtime },
    } = options;

    // Run directly instead of wrapping in a category
    const isRoot = parentStore == null;
    if (isRoot) {
      const res = reporter.categoryStart(undefined, undefined);

      parentStore = res instanceof Promise ? await res : res;
      id = 'benchmarks';
    }

    {
      let store = reporter.benchStart(id!, parentStore!);
      store instanceof Promise && (store = await store);

      const benchCnt = this.benchIds.length;

      // Shuffle list
      const doShuffle = options.shuffle !== false;
      let shuffleMap: number[];
      if (doShuffle) {
        shuffleMap = new Array(benchCnt);
        for (let i = 0; i < benchCnt; i++) shuffleMap[i] = i;
        for (let i = benchCnt; i > 0; ) {
          const swapIdx = (Math.random() * i) >>> 0;
          i--;

          const v = shuffleMap[i];
          shuffleMap[i] = shuffleMap[swapIdx];
          shuffleMap[swapIdx] = v;
        }
      }

      // Run cases
      for (
        let i = 0,
          { benchIds, benchParams, benchFns, benchOptionList, benchLoops } = this;
        i < benchCnt;
        i++
      ) {
        const shuffledIdx = doShuffle ? shuffleMap![i] : i;

        try {
          const res = reporter.benchResult(
            store,
            benchIds[shuffledIdx],
            await measure(
              benchParams[shuffledIdx],
              benchFns[shuffledIdx],
              gc,
              hrtime,
              defaultBenchOptions != null
                ? {
                    ...defaultBenchOptions,
                    ...benchOptionList[shuffledIdx],
                  }
                : benchOptionList[shuffledIdx],
              await benchLoops[i]
            ),
          );
          res instanceof Promise && (await res);
        } catch (e) {
          const res = reporter.benchError(
            store,
            benchIds[shuffledIdx],
            e,
          );
          res instanceof Promise && (await res);
        }
      }

      const res = reporter.benchEnd(store, id!, parentStore!);
      res instanceof Promise && (await res);
    }

    // Return to match the behavior of category.run
    if (isRoot)
      return reporter.categoryEnd(parentStore!, undefined, undefined);
  }
}

export default (defaultBenchOptions?: MeasureOptions): Bench =>
  new Bench(defaultBenchOptions);
