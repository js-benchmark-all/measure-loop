import { supportsColor } from '../env/color.ts';
import { print } from '../env/print.ts';
import {
  runtime,
  runtimeVersion,
  runtimePlatform,
} from '../env/runtime.ts';

import type { Reporter } from '../api/types.ts';

import {
  calcAvg,
  calcPercentile,
  calcVariance,
  formatMs,
  trunc,
} from './utils.ts';

import { IS_BUILD } from 'runtime-compiler/env';
import noop from './noop.ts';

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

const displayResults = (tab: string, runs: number[]): number => {
  runs.sort((a, b) => a - b);

  const len = runs.length;
  const avg = calcAvg(runs);

  print(
    tab +
      '- mean: ' +
      yellowBright(formatMs(avg)) +
      ' ± ' +
      yellowBright(
        formatMs(Math.sqrt(calcVariance(runs, avg) / len)),
      ),
  );
  print(
    tab +
      '- p99: ' +
      yellowBright(formatMs(calcPercentile(runs, 0.99))),
  );
  print(
    tab +
      '- range: ' +
      yellowBright(formatMs(runs[0])) +
      ' - ' +
      yellowBright(formatMs(runs[len - 1])),
  );

  return avg;
};

const reporter: Reporter<
  {
    tab: string;
    heading: string;
  },
  {
    tab: string;
    results: { key: string; runsAvg: number }[];
  },
  void
> = IS_BUILD
  ? (noop as any)
  : {
      start: () => {
        let str = '';

        if (runtime != null) {
          str += '\n$ runtime: ' + runtime;
          runtimeVersion && (str += ' ' + runtimeVersion);
          runtimePlatform && (str += ' (' + runtimePlatform + ')');
        }

        print(dim(str));

        return {
          tab: '',
          heading: '# ',
        };
      },
      end: (_) => {},

      categoryStart: (id, parentStore) => {
        const { tab, heading } = parentStore;

        print(tab + bold(heading + id));
        return {
          tab: tab + '  ',
          heading: '#' + heading,
        };
      },
      categoryEnd: (_, _1, _2) => {},

      benchStart: (id, { tab, heading }) => {
        print(tab + bold(heading + id));
        return {
          tab: tab + '  ',
          results: [],
        };
      },

      benchResult: (
        { tab, results },
        caseId,
        { runs, gcs, calls },
      ) => {
        if (runs.length === 0) {
          print(tab + '* ' + boldCyan(caseId) + ': no result');
          return;
        }

        print(
          tab +
            '* ' +
            boldCyan(caseId) +
            ': ' +
            yellowBright(calls) +
            ' runs',
        );
        tab += '  ';

        results.push({
          key: caseId,
          runsAvg: displayResults(tab, runs),
        });

        if (gcs != null) {
          print(tab + '- gc:');
          displayResults(tab + '  ', gcs);
        }
      },

      benchError: ({ tab }, caseId, e) => {
        print(tab + '* ' + boldCyan(caseId) + ': error');
        print(e);
      },

      benchEnd: ({ tab, results }, _, _1) => {
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
      },
    };

export default reporter;
