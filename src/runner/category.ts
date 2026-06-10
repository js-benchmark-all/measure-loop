import {
  measure,
  mergeMeasureOptions,
  type MeasureOptions,
  type MeasureResult,
} from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<in out Store> {
  start: () => Store;
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
  readonly benchOptions: any[];

  constructor(id: string, defaultBenchOptions?: MeasureOptions) {
    this.id = id;
    this.subcats = [];

    this.benchKeys = [];
    this.benchParams = [];
    this.benchFns = [];
    this.benchOptions = [];

    this.defaultBenchOptions = defaultBenchOptions;
  }

  category(subcat: Category): this {
    this.subcats.push(subcat);
    return this;
  }

  bench<const Params extends (() => any)[]>(
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
    this.benchOptions.push(mergeMeasureOptions(options, this.defaultBenchOptions));
    return this;
  }

  async run<ReporterStore extends {}>(
    options: RunOptions<ReporterStore>,
    parentStore?: ReporterStore,
  ): Promise<void> {
    const reporter = options.reporter;

    const isRoot = !parentStore;
    isRoot && (parentStore = await reporter.start());

    const store = await reporter.benchStart(this.id, parentStore!);
    for (
      let i = 0,
        { benchKeys, benchParams, benchFns, benchOptions } = this,
        { gc, hrtime } = options.env;
      i < benchKeys.length;
      i++
    ) {
      let result: MeasureResult;

      try {
        result = await measure(benchParams[i], benchFns[i], gc, hrtime, benchOptions[i]);
      } catch (e) {
        await reporter.benchError(benchKeys[i], store, e);
        continue;
      }

      await reporter.benchResult(benchKeys[i], store, result);
    }
    await reporter.benchEnd(store);

    for (let i = 0, subcats = this.subcats; i < subcats.length; i++)
      await subcats[i].run(options, store);

    isRoot && (await reporter.end(parentStore!));
  }
}

export default (id: string, defaultBenchOptions?: MeasureOptions): Category =>
  new Category(id, defaultBenchOptions);
