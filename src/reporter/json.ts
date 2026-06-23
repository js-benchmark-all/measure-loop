import type { MeasureResult } from '../measure.ts';
import type { Reporter } from '../api/types.ts';

export interface CategoryResult {
  /**
   * Child benchmarks results.
   */
  benchmarks?: Record<string, BenchResult> | undefined;

  /**
   * Child categories results.
   */
  categories?: Record<string, CategoryResult> | undefined;
}

export interface BenchResult {
  /**
   * Cases results.
   */
  results: Record<string, MeasureResult>;

  /**
   * Cases with errors.
   */
  errors?: Record<string, unknown> | undefined;
}

const start = () => ({
  bench: undefined,
  categories: undefined,
});

/**
 * Report JSON.
 * @example
 * import reporter from 'measure-loop/reporter/json';
 *
 * const res = await category.run({ env, reporter });
 */
const reporter: Reporter<
  CategoryResult,
  BenchResult,
  CategoryResult
> = {
  start,
  end: (store) => store,

  categoryStart: start,
  categoryEnd: (store, id, parentStore) => {
    (parentStore.categories ??= {})[id] = store;
  },

  benchStart: () => ({
    results: {},
    errors: undefined,
  }),
  benchResult: (store, caseId, res) => {
    store.results[caseId] = res;
  },
  benchError: (store, caseId, e) => {
    (store.errors ??= {})[caseId] = e;
  },
  benchEnd: (store, id, parentStore) => {
    (parentStore.benchmarks ??= {})[id] = store;
  },
};

export default reporter;
