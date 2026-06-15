import { supportsColor } from '../env/color.ts';
import { print } from '../env/print.ts';
import {
  runtime,
  runtimeVersion,
  runtimeArch,
} from '../env/runtime.ts';

import type { Reporter } from '../runner/category.ts';
import {
  calcAvg,
  calcPercentile,
  calcVariance,
  formatMs,
  trunc,
} from './utils.ts';

type ColorFn = (str: string | number) => string;
const fallback: ColorFn = (str) => str + '';

const yellowBright: ColorFn = supportsColor
  ? (str) => '\x1b[93m' + str + '\x1b[39m'
  : fallback;
const green: ColorFn = supportsColor
  ? (str) => '\x1b[32m' + str + '\x1b[39m'
  : fallback;
const bold: ColorFn = supportsColor
  ? (str) => '\x1b[1m' + str + '\x1b[22m'
  : fallback;
const boldCyan: ColorFn = supportsColor
  ? (str) => '\x1b[1m\x1b[36m' + str + '\x1b[39m\x1b[22m'
  : fallback;
const dim: ColorFn = supportsColor
  ? (str) => '\x1b[2m' + str + '\x1b[22m'
  : fallback;

const displayResults = (tab: string, results: number[]): number => {
  results.sort((a, b) => a - b);

  const len = results.length;
  const avg = calcAvg(results);

  print(
    tab +
      '- mean: ' +
      yellowBright(formatMs(avg)) +
      ' ± ' +
      yellowBright(
        formatMs(Math.sqrt(calcVariance(results, avg) / len)),
      ),
  );
  print(
    tab +
      '- p99: ' +
      yellowBright(formatMs(calcPercentile(results, 0.99))),
  );
  print(
    tab +
      '- range: ' +
      yellowBright(formatMs(results[0])) +
      ' - ' +
      yellowBright(formatMs(results[len - 1])),
  );

  return avg;
};

const reporter: Reporter<{
  tab: string;
  heading: string;
}, {
  tab: string;
  results: { key: string; runsAvg: number }[];
}> = {
  categoryStart: (cat, store) => {
    if (cat == null) {
      let str = '';

      if (runtime) {
        str += '\n$ runtime: ' + runtime;
        runtimeVersion && (str += ' ' + runtimeVersion);
        runtimeArch && (str += ' (' + runtimeArch + ')');
      }

      print(dim(str));

      return {
        tab: '',
        heading: '#'
      };
    }
    const { tab, heading } = store!;

    print(tab + bold(heading + cat));
    return {
      tab: tab + '  ',
      heading: '#' + heading
    };
  },
  categoryEnd: () => {},

  benchStart: (cat, { tab, heading }) => {
    print(tab + bold(heading + cat));
    return {
      tab: tab + '  ',
      results: [],
    };
  },

  benchResult: (key, { tab, results }, { runs, gcs, calls }) => {
    if (runs.length === 0) {
      print(tab + '* ' + boldCyan(key) + ': no result');
      return;
    }

    print(
      tab +
        '* ' +
        boldCyan(key) +
        ': ' +
        yellowBright(calls) +
        ' runs',
    );
    tab += '  ';

    results.push({
      key,
      runsAvg: displayResults(tab, runs),
    });

    if (gcs) {
      print(tab + '- gc:');
      displayResults(tab + '  ', gcs);
    }
  },

  benchError: (key, { tab }, e) => {
    print(tab + '* ' + boldCyan(key) + ': error');
    print(e);
  },

  benchEnd: ({ tab, results }) => {
    if (results.length < 2) return;

    results.sort((a, b) => a.runsAvg - b.runsAvg);
    print(tab + '& ' + boldCyan(results[0].key));

    tab += '  - ';
    for (
      let i = 1, baseline = results[0].runsAvg;
      i < results.length;
      i++
    )
      print(
        tab +
          green(trunc(results[i].runsAvg / baseline) + 'x') +
          ' faster than ' +
          boldCyan(results[i].key),
      );
  }
};

export default reporter;
