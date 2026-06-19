import type { MeasureResult } from '../measure.ts';
import type { Reporter } from '../runner/bench.ts';

export interface CategoryResult {
  type: 'category';

  /**
   * Child categories and benchmarks results.
   */
  results: Record<string, CategoryResult | BenchResult>;
}

export interface BenchResult {
  type: 'bench';

  /**
   * Cases results.
   */
  results: Record<string, MeasureResult>;

  /**
   * Cases with errors.
   */
  errors: Record<string, unknown>;
}

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
  CategoryResult,
  void
> = {
  categoryStart: () => ({
    type: 'category',
    results: {},
  }),
  categoryEnd: (store, id, parentStore) => {
    if (id == null) return store;
    parentStore!.results[id] = store;
  },

  benchStart: () => ({
    type: 'bench',
    results: {},
    errors: {},
  }),
  benchResult: (store, caseId, res) => {
    store.results[caseId] = res;
  },
  benchError: (store, caseId, e) => {
    store.errors[caseId] = e;
  },
  benchEnd: (store, id, parentStore) => {
    parentStore.results[id] = store;
  },
};

export default reporter;
