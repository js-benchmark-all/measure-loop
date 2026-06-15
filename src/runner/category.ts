import {
  measure,
  type MeasureOptions,
  type MeasureResult,
} from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<in out CategoryStore, in out BenchStore> {
  categoryStart(cat: undefined, store: undefined): CategoryStore;
  categoryStart(cat: string, store: CategoryStore): CategoryStore;

  categoryEnd(store: CategoryStore): any;

  benchStart(
    cat: string,
    store: CategoryStore,
  ): BenchStore | Promise<BenchStore>;
  benchResult(
    benchKey: string,
    store: BenchStore,
    result: MeasureResult,
  ): any;
  benchError(benchKey: string, store: BenchStore, error: unknown): any;
  benchEnd(store: BenchStore): any;
}

export interface RunOptions<in out CategoryStore, in out BenchStore> {
  reporter: Reporter<CategoryStore, BenchStore>;
  env: RuntimeEnv;
  shuffle?: boolean;
}

export interface BenchFn {
  <const Params extends (() => any)[]>(
    params: Params,
    fn: (
      ...args: {
        [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
      }
    ) => any,
    options?: MeasureOptions,
  ): Promise<MeasureResult>;
}

export class Bench {
  readonly benchKeys: string[];
  readonly benchParams: any[];
  readonly benchFns: any[];
  readonly benchOptionList: any[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.benchKeys = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptionList = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it<const Params extends ((idx: number) => any)[]>(
    id: string,
    params: Params,
    fn: (
      ...args: {
        [K in keyof Params]: Awaited<ReturnType<Params[K]>>;
      }
    ) => any,
    options?: MeasureOptions,
  ): this {
    this.benchKeys.push(id);
    this.benchParams.push(params);
    this.benchFns.push(fn);
    this.benchOptionList.push(options);
    return this;
  }

  async run<CategoryStore>(
    options: RunOptions<CategoryStore, any>,
    id?: string,
    parentStore?: CategoryStore,
    defaultBenchOptions?: MeasureOptions,
  ): Promise<void> {
    // Add new options if exists
    this.defaultBenchOptions != null &&
      (defaultBenchOptions =
        defaultBenchOptions != null
          ? {
              ...defaultBenchOptions,
              ...this.defaultBenchOptions,
            }
          : this.defaultBenchOptions);

    const reporter = options.reporter;

    // Run directly instead of wrapping in a category
    const isRoot = parentStore == null;
    isRoot && (
      id = 'benchmarks',
      parentStore = await reporter.categoryStart(undefined, undefined)
    );

    {
      const store = await reporter.benchStart(id!, parentStore!);
      const benchCnt = this.benchKeys.length;

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
          { benchKeys, benchParams, benchFns, benchOptionList } = this,
          { gc, hrtime } = options.env;
        i < benchCnt;
        i++
      ) {
        const shuffledIdx = doShuffle ? shuffleMap![i] : i;

        let result: MeasureResult;
        try {
          result = await measure(
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
          );
        } catch (e) {
          await reporter.benchError(benchKeys[shuffledIdx], store, e);
          continue;
        }

        await reporter.benchResult(benchKeys[shuffledIdx], store, result);
      }

      await reporter.benchEnd(store);
    }

    // Run directly instead of wrapping in a category
    isRoot && (await reporter.categoryEnd(parentStore!));
  }
}

export class Category {
  readonly childrenNames: string[];
  readonly children: (Category | Bench)[];

  readonly defaultBenchOptions: MeasureOptions | undefined;

  constructor(defaultBenchOptions?: MeasureOptions) {
    this.childrenNames = [];
    this.children = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  it(name: string, bench: Category | Bench): this {
    this.childrenNames.push(name);
    this.children.push(bench);
    return this;
  }

  async run<CategoryStore>(
    options: RunOptions<CategoryStore, any>,
    id?: string,
    parentStore?: CategoryStore,
    defaultBenchOptions?: MeasureOptions,
  ): Promise<void> {
    // Add new options if exists
    this.defaultBenchOptions != null &&
      (defaultBenchOptions =
        defaultBenchOptions != null
          ? {
              ...defaultBenchOptions,
              ...this.defaultBenchOptions,
            }
          : this.defaultBenchOptions);

    const reporter = options.reporter;
    // @ts-ignore
    const store = await reporter.categoryStart(id, parentStore);

    for (let i = 0, { children, childrenNames } = this; i < children.length; i++)
      await children[i].run(options, childrenNames[i], store, defaultBenchOptions);

    await reporter.categoryEnd(store);
  }
}

export const bench = (defaultBenchOptions?: MeasureOptions): Bench => new Bench(defaultBenchOptions);
export const category = (defaultBenchOptions?: MeasureOptions): Category => new Category(defaultBenchOptions);
