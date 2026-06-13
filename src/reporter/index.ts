import { supportsColor } from '../env/color.ts';
import { runtime, runtimeVersion, runtimeArch } from '../env/runtime.ts';

import type { Reporter } from '../runner/category.ts';
import { calcAvg, calcVariance, formatMs, trunc } from './utils.ts';

type ColorFn = (str: string | number) => string;
const fallback: ColorFn = (str) => str + '';

const yellowBright: ColorFn = supportsColor ? (str) => '\x1b[93m' + str + '\x1b[39m' : fallback;
const greenBright: ColorFn = supportsColor ? (str) => '\x1b[92m' + str + '\x1b[39m' : fallback;
const bold: ColorFn = supportsColor ? (str) => '\x1b[1m' + str + '\x1b[22m' : fallback;
const boldCyan: ColorFn = supportsColor
  ? (str) => '\x1b[1m\x1b[36m' + str + '\x1b[39m\x1b[22m'
  : fallback;
const dim: ColorFn = supportsColor ? (str) => '\x1b[2m' + str + '\x1b[22m' : fallback;

const displayResults = (tab: string, results: number[]): number => {
  results.sort((a, b) => a - b);

  const len = results.length;
  const avg = calcAvg(results);

  console.log(tab + '- avg: ' + yellowBright(formatMs(avg)));
  console.log(
    tab +
      '- rse: ' +
      yellowBright(trunc((Math.sqrt(calcVariance(results, avg) / len) * 100) / avg) + '%'),
  );
  console.log(tab + '- min: ' + yellowBright(formatMs(results[0])));
  console.log(tab + '- max: ' + yellowBright(formatMs(results[len - 1])));

  return avg;
};

const reporter: Reporter<{
  tab: string;
  results: { key: string; runsAvg: number }[];
}> = {
  start: () => {
    let str = '';

    if (runtime) {
      str += '\n$ runtime: ' + runtime;
      runtimeVersion && (str += ' ' + runtimeVersion);
      runtimeArch && (str += ' (' + runtimeArch + ')');
    }

    console.log(dim(str));

    return {
      tab: '',
      results: [],
    };
  },

  benchStart: (cat, { tab }) => {
    console.log('\n' + tab + '# ' + bold(cat.id));
    return {
      tab: tab + '  ',
      results: [],
    };
  },

  benchResult: (key, { tab, results }, { runs, gcs, calls }) => {
    if (runs.length === 0) {
      console.warn(tab + '* ' + boldCyan(key) + ': no result');
      return;
    }

    console.log(tab + '* ' + boldCyan(key) + ': ' + yellowBright(calls) + ' runs');
    tab += '  ';

    results.push({
      key,
      runsAvg: displayResults(tab, runs),
    });

    if (gcs) {
      console.log(tab + '- gc:');
      displayResults(tab + '  ', gcs);
    }
  },

  benchError: (key, { tab }, e) => {
    console.error(tab + '* ' + boldCyan(key));
    console.error(e);
  },

  benchEnd: (_, { tab, results }) => {
    if (results.length === 0) return;

    results.sort((a, b) => a.runsAvg - b.runsAvg);
    console.log(tab + '& ' + boldCyan(results[0].key));

    tab += '  - ';
    for (let i = 1, baseline = results[0].runsAvg; i < results.length; i++)
      console.log(
        tab +
          greenBright(trunc(results[i].runsAvg / baseline) + 'x') +
          ' faster than ' +
          boldCyan(results[i].key),
      );
  },

  end: () => {},
};

export default reporter;
