import pc from 'picocolors';
import { hrtime } from '$/env';

export const math = {
  /**
   * @param {number[]} arr
   */
  mean: (arr) => arr.reduce((a, b) => a + b, 0) / arr.length,

  /**
   * p? percentile
   * @param {number[]} arr
   * @param {number} p
   */
  percentile: (arr, p) => {
    const n = arr.length;

    const index = p * (n - 1);
    const lower = Math.floor(index);

    if (lower + 1 >= n) return arr[lower];

    const weight = index - lower;
    return arr[lower] * (1 - weight) + arr[lower + 1] * weight;
  },

  /**
   * Relative standard deviation
   * @param {number[]} arr
   */
  rsd: (arr) => {
    const mean = math.mean(arr);

    return (
      Math.sqrt(
        arr.reduce((prevSum, cur) => prevSum + (cur - mean) * (cur - mean), 0) / arr.length,
      ) / mean
    );
  },

  /**
   * @param {number} n
   */
  truncate: (n) => (n < 0.01 ? n : Math.round(n * 100) / 100),
};

/**
 * @param {number} num
 * @param {string} unit
 */
const toFormatted = (num, unit) => pc.yellowBright(math.truncate(num) + unit);

const blueDash = pc.cyanBright('-');
let lastTime = hrtime();

/**
 * @param {string} title
 * @param {number[]} runs
 * @param {number} batchSize
 */
export const print = (title, runs, batchSize) => {
  const currentTime = hrtime();

  runs.sort((a, b) => a - b);

  console.log(pc.bold('\n### ' + title));
  console.log(blueDash, 'runtime:', toFormatted((currentTime - lastTime) / 1e6, 'ms'));

  console.log(blueDash, 'samples:', runs.length);
  console.log(blueDash, 'runs:', runs.length * batchSize);

  console.log(blueDash, 'mean:', toFormatted(math.mean(runs), 'ns'));
  console.log(blueDash, 'variation:', toFormatted(math.rsd(runs) * 100, '%'));
};
