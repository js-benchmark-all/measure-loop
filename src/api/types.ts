import type { MeasureOptions, MeasureResult } from '../measure.ts';

export interface RuntimeEnv {
  gc: () => void;
  hrtime: () => number;
}

export interface Reporter<
  in out CategoryStore,
  in out BenchStore,
  out Result,
> {
  start: () => CategoryStore | Promise<CategoryStore>;
  end: (store: CategoryStore) => Result;

  categoryStart(
    id: string,
    parentStore: CategoryStore,
  ): CategoryStore | Promise<CategoryStore>;
  categoryEnd(
    store: CategoryStore,
    id: string,
    parentStore: CategoryStore,
  ): any;

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

export interface RunOptions<in out CategoryStore, out Result> {
  reporter: Reporter<CategoryStore, any, Result>;
  env: RuntimeEnv;
  shuffle?: boolean;
}

export interface Runnable {
  /**
   * Run the benchmarks of this category.
   */
  run<Result>(
    options: RunOptions<any, Result>,
    defaultBenchOptions?: MeasureOptions | undefined,
  ): Promise<Result>;

  /**
   * Run the benchmark in a category.
   */
  run<CategoryStore, Result>(
    options: RunOptions<CategoryStore, Result>,
    defaultBenchOptions: MeasureOptions | undefined,
    id: string,
    parentStore: CategoryStore,
  ): Promise<Result>;
}
