import {
  measure,
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
> {
  categoryStart(
    ...args:
      | [id: undefined, parentStore: undefined]
      | [id: string, parentStore: CategoryStore]
  ): CategoryStore | Promise<CategoryStore>;
  categoryEnd(
    store: CategoryStore,
  ): CategoryReturn | Promise<CategoryReturn>;

  benchStart(
    id: string,
    parentStore: CategoryStore,
  ): BenchStore | Promise<BenchStore>;
  benchResult(
    caseId: string,
    store: BenchStore,
    result: MeasureResult,
  ): any;
  benchError(caseId: string, store: BenchStore, error: unknown): any;
  benchEnd(store: BenchStore, parentStore: CategoryStore): any;
}

export interface RunOptions<
  in out CategoryStore,
  in out BenchStore,
  out CategoryReturn,
> {
  reporter: Reporter<CategoryStore, BenchStore, CategoryReturn>;
  env: RuntimeEnv;
  shuffle?: boolean;
}

export class Bench {
  readonly benchIds: string[];
  readonly benchParams: any[];
  readonly benchFns: any[];
  readonly benchOptionList: any[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.benchIds = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptionList = [];

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
    return this;
  }

  /**
   * Run the benchmark directly without wrapping in a category.
   */
  run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, any, CategoryReturn>,
    defaultBenchOptions?: MeasureOptions
  ): Promise<CategoryReturn>;

  /**
   * Run the benchmark in a category.
   */
  run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, any, CategoryReturn>,
    defaultBenchOptions: MeasureOptions,
    id: string,
    parentStore: CategoryStore
  ): Promise<void>;

  async run<CategoryStore, CategoryReturn>(
    options: RunOptions<CategoryStore, any, CategoryReturn>,
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
      id = 'benchmarks';
      const res = reporter.categoryStart(undefined, undefined);
      parentStore = res instanceof Promise ? await res : res;
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
          { benchIds, benchParams, benchFns, benchOptionList } = this;
        i < benchCnt;
        i++
      ) {
        const shuffledIdx = doShuffle ? shuffleMap![i] : i;

        try {
          const res = reporter.benchResult(
            benchIds[shuffledIdx],
            store,
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
            ),
          );
          res instanceof Promise && (await res);
        } catch (e) {
          const res = reporter.benchError(
            benchIds[shuffledIdx],
            store,
            e,
          );
          res instanceof Promise && (await res);
        }
      }

      const res = reporter.benchEnd(store, parentStore!);
      res instanceof Promise && (await res);
    }

    // Return to match the behavior of category.run
    if (isRoot) return reporter.categoryEnd(parentStore!);
  }
}

export default (defaultBenchOptions?: MeasureOptions): Bench =>
  new Bench(defaultBenchOptions);
