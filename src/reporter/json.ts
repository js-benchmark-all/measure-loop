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
  CategoryResult
> = {
  categoryStart: (id, parentStore) =>
    id == null
      ? {
          type: 'category',
          results: {},
        }
      : (parentStore.results[id] = {
          type: 'category',
          results: {},
        }),
  categoryEnd: (store) => store,

  benchStart: (id, parentStore) =>
    (parentStore.results[id] = {
      type: 'bench',
      results: {},
      errors: {},
    }),

  benchResult: (caseId, store, res) => {
    store.results[caseId] = res;
  },

  benchError: (caseId, store, e) => {
    store.errors[caseId] = e;
  },

  benchEnd: () => {},
};

export default reporter;
