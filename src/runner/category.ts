import { measure, type MeasureOptions, type MeasureResult } from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<in out Store> {
  start: () => Store | Promise<Store>;
  benchStart: (catId: string, parentStore: Store) => Store | Promise<Store>;
  benchResult: (benchKey: string, store: Store, result: MeasureResult) => any;
  benchError: (benchKey: string, store: Store, error: unknown) => any;
  benchEnd: (store: Store) => any;
  end: (store: Store) => any;
}

export interface RunOptions<ReporterStore extends {}> {
  reporter: Reporter<ReporterStore>;
  env: RuntimeEnv;
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

  it<const Params extends (() => any)[]>(
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
    this.defaultBenchOptions &&
      (defaultBenchOptions = defaultBenchOptions
        ? { ...defaultBenchOptions, ...this.defaultBenchOptions }
        : this.defaultBenchOptions);

    const reporter = options.reporter;

    const isRoot = !parentStore;
    isRoot && (parentStore = await reporter.start());

    const store = await reporter.benchStart(this.id, parentStore!);
    for (
      let i = 0,
        { benchKeys, benchParams, benchFns, benchOptionList } = this,
        { gc, hrtime } = options.env;
      i < benchKeys.length;
      i++
    ) {
      let result: MeasureResult;

      try {
        result = await measure(
          benchParams[i],
          benchFns[i],
          gc,
          hrtime,
          defaultBenchOptions
            ? {
                ...defaultBenchOptions,
                ...benchOptionList[i],
              }
            : benchOptionList[i],
        );
      } catch (e) {
        await reporter.benchError(benchKeys[i], store, e);
        continue;
      }

      await reporter.benchResult(benchKeys[i], store, result);
    }
    await reporter.benchEnd(store);

    for (let i = 0, { subcats } = this; i < subcats.length; i++)
      await subcats[i].run(options, defaultBenchOptions, store);

    isRoot && (await reporter.end(parentStore!));
  }
}

export default (id: string, defaultBenchOptions?: MeasureOptions): Category =>
  new Category(id, defaultBenchOptions);
