import type { MeasureResult } from '../measure.ts';
import type { Reporter } from '../api/types.ts';
import { emptyFn } from './utils.ts';

export interface CategoryResult {
  /**
   * Child benchmarks results.
   */
  benchmarks: Record<string, BenchResult> | undefined;

  /**
   * Child categories results.
   */
  categories: Record<string, CategoryResult> | undefined;
}

export interface BenchResult {
  /**
   * Cases results.
   */
  results: Record<string, MeasureResult> | undefined;

  /**
   * Cases with errors.
   */
  errors: Record<string, unknown> | undefined;
}

const start = (): CategoryResult => ({
  benchmarks: undefined,
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
  void,
  CategoryResult
> = {
  start,
  end: (store) => store,

  categoryStart: start,
  categoryEnd: (store, id, parentStore) => {
    (parentStore.categories ??= {})[id] = store;
  },

  benchStart: () => ({
    results: undefined,
    errors: undefined,
  }),

  caseStart: emptyFn,
  caseResult: (_, caseId, res, store) => {
    (store.results ??= {})[caseId] = res;
  },
  caseError: (_, caseId, e, store) => {
    (store.errors ??= {})[caseId] = e;
  },

  benchEnd: (store, id, parentStore) => {
    (parentStore.benchmarks ??= {})[id] = store;
  },
};

export default reporter;
