import { supportsColor } from '../env/color.ts';
import type { Reporter } from '../runner/category.ts';
import { calcAvg, calcVariance, formatMs as utilFormatMs, trunc } from './utils.ts';

type ColorFn = (str: string | number) => string;
const fallback: ColorFn = (str) => str + '';

const yellowBright: ColorFn = supportsColor ? (str) => "\x1b[93m" + str + "\x1b[39m" : fallback;
const greenBright: ColorFn = supportsColor ? (str) => "\x1b[92m" + str + "\x1b[39m" : fallback;
const bold: ColorFn = supportsColor ? (str) => "\x1b[1m" + str + "\x1b[22m" : fallback;
const boldCyan: ColorFn = supportsColor ? (str) => "\x1b[1m\x1b[36m" + str + "\x1b[39m\x1b[22m" : fallback;

const formatMs = (ms: number) => yellowBright(utilFormatMs(ms));

const displayResults = (tab: string, results: number[]): number => {
  const len = results.length;

  results.sort((a, b) => a - b);

  const avg = calcAvg(results),
    variance = calcVariance(results, avg);

  console.log(tab + '- avg: ' + formatMs(avg) + ' ± ' + formatMs(Math.sqrt(variance / len)));
  console.log(tab + '- min: ' + formatMs(results[0]));
  console.log(tab + '- max: ' + formatMs(results[len - 1]));

  return avg;
};

const reporter: Reporter<{
  tab: string,
  results: { key: string, runsAvg: number }[]
}> = {
  start: () => ({
    tab: '',
    results: []
  }),

  benchStart: (cat, { tab }) => {
    console.log('\n' + tab + '# ' + bold(cat.id));
    return {
      tab: tab + '  ',
      results: []
    };
  },

  benchResult: (key, { tab, results }, { runs, gcs, calls }) => {
    console.log(tab + '* ' + boldCyan(key));
    tab += '  ';

    if (runs.length === 0) {
      console.warn(tab + '- no result');
      return;
    }

    console.log(tab + '- runs: ' + yellowBright(calls));
    results.push({
      key,
      runsAvg: displayResults(tab, runs)
    });

    if (gcs.length > 0) {
      console.log(tab + '- gc:');
      displayResults(tab + '  ', gcs);
    }
  },

  benchError: (key, { tab }, e) => {
    console.error(tab + '+ ' + boldCyan(key));
    console.error(e);
  },

  benchEnd: (_, { tab, results }) => {
    if (results.length === 0) return;

    results.sort((a, b) => a.runsAvg - b.runsAvg);
    console.log(tab + '& ' + boldCyan(results[0].key));

    tab += '  - ';
    for (let i = 1, baseline = results[0].runsAvg; i < results.length; i++)
      console.log(tab + greenBright(trunc(results[i].runsAvg / baseline) + 'x') + ' faster than ' + boldCyan(results[i].key));
  },

  end: () => {},
};

export default reporter;
