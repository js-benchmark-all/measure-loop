import type { MeasureResult } from '../measure.ts';
import type { Reporter } from '../api/types.ts';
import {
  calcAvg,
  calcPercentile,
  calcVariance,
  formatMs,
} from './utils.ts';

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

const resultRow = (runs: number[], avg: number): string => {
  return `\`${
    // mean
    formatMs(avg)
  } ± ${
    // standard error
    formatMs(Math.sqrt(calcVariance(runs, avg) / runs.length))
  }\`|\`${
    // p99
    formatMs(calcPercentile(runs, 0.99))
  }\`|\`${
    // min
    formatMs(runs[0]) +
    ' - ' +
    // max
    formatMs(runs[runs.length - 1])
  }\`|`;
};

/**
 * Report JSON.
 * @example
 * import reporter from 'measure-loop/reporter/json';
 *
 * const res = await category.run({ env, reporter });
 */
const reporter: Reporter<
  {
    heading: string;
    content: string;
  },
  {
    rows: {
      key: number;
      content: string;
    }[];
    collectGC: boolean;
  },
  string
> = {
  start: () => ({
    heading: '# ',
    content: '',
  }),
  end: (store) => store.content,

  categoryStart: (id, parentStore) => ({
    heading: '#' + parentStore.heading,
    content: parentStore.heading + id + '\n',
  }),
  categoryEnd: (store, _, parentStore) => {
    parentStore.content += store.content;
  },

  benchStart: () => ({
    rows: [],
    collectGC: false,
  }),
  benchResult: (store, caseId, { runs, gcs, calls }) => {
    runs.sort((a, b) => a - b);
    const avg = calcAvg(runs);

    let content = `|${caseId}|\`${calls}\`|` + resultRow(runs, avg);

    if (gcs) {
      store.collectGC = true;

      gcs.sort((a, b) => a - b);
      content += resultRow(gcs, avg);
    }

    store.rows.push({
      key: avg,
      content: content + '\n',
    });
  },
  benchError: (store, caseId) => {
    store.rows.push({
      key: Infinity,
      content: `|${caseId}|error|\n`,
    });
  },
  benchEnd: ({ rows, collectGC }, id, parentStore) => {
    parentStore.content +=
      parentStore.heading +
      id +
      (collectGC
        ? '\n|case|runs|mean|p99|range|gc mean|gc p99|gc range|\n|-|-|-|-|-|-|-|-|\n'
        : '\n|case|runs|mean|p99|range|\n|-|-|-|-|-|\n');

    rows.sort((a, b) => a.key - b.key);
    for (let i = 0; i < rows.length; i++)
      parentStore.content += rows[i].content;
  },
};

export default reporter;
