import {
  measure,
  type MeasureOptions,
  type MeasureResult,
} from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<in out Store extends {}> {
  start: (
    root: Category,
    runOptions: RunOptions<Store>,
    defaultBenchOptions: MeasureOptions | undefined,
  ) => Store | Promise<Store>;
  benchStart: (
    cat: Category,
    parentStore: Store,
  ) => Store | Promise<Store>;
  benchResult: (
    benchKey: string,
    store: Store,
    result: MeasureResult,
  ) => any;
  benchError: (benchKey: string, store: Store, error: unknown) => any;
  benchEnd: (cat: Category, store: Store) => any;
  end: (root: Category, store: Store) => any;
}

export interface RunOptions<ReporterStore extends {}> {
  reporter: Reporter<ReporterStore>;
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

export class Category {
  readonly id: string;
  readonly subcats: Category[];

  readonly defaultBenchOptions: MeasureOptions | undefined;
  readonly benchKeys: string[];
  readonly benchParams: any[];
  readonly benchFns: any[];
  readonly benchOptionList: any[];

  constructor(id: string, defaultBenchOptions?: MeasureOptions) {
    this.id = id;
    this.subcats = [];

    this.benchKeys = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptionList = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  category(subcat: Category): this {
    this.subcats.push(subcat);
    return this;
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

  async run<ReporterStore extends {}>(
    options: RunOptions<ReporterStore>,
    defaultBenchOptions?: MeasureOptions,
    parentStore?: ReporterStore,
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

    const isRoot = parentStore == null;

    isRoot &&
      (parentStore = await reporter.start(
        this,
        options,
        defaultBenchOptions,
      ));
    const store = await reporter.benchStart(this, parentStore!);

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

    // Run subcats
    for (let i = 0, { subcats } = this; i < subcats.length; i++)
      await subcats[i].run(options, defaultBenchOptions, store);

    await reporter.benchEnd(this, store);
    isRoot && (await reporter.end(this, parentStore!));
  }
}

export default (
  id: string,
  defaultBenchOptions?: MeasureOptions,
): Category => new Category(id, defaultBenchOptions);
