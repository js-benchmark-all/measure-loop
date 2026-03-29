import pc from 'picocolors';

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


const toFormatted = (num, unit) => pc.yellowBright(math.truncate(num) + unit);

/**
 * @param {number[]} runs
 * @param {number} batchSize
 */
export const print = (runs, batchSize) => {
  runs.sort((a, b) => a - b);

  console.log('samples size:', runs.length);
  console.log('actual runs:', runs.length * batchSize);

  console.log('mean:', toFormatted(math.mean(runs), 'ns'));

  console.log('p50:', toFormatted(math.percentile(runs, .5), 'ns'));
  console.log('p75:', toFormatted(math.percentile(runs, .75), 'ns'));
  console.log('p99:', toFormatted(math.percentile(runs, .99), 'ns'));

  console.log('variation:', toFormatted(math.rsd(runs) * 100, '%'));
};
