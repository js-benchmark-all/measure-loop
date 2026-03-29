export const math = {
  /**
   * p? percentile
   */
  percentile: (arr: number[], p: number) => {
    const n = arr.length;

    const index = p * (n - 1);
    const lower = Math.floor(index);

    if (lower + 1 >= n) return arr[lower];

    const weight = index - lower;
    return arr[lower] * (1 - weight) + arr[lower + 1] * weight;
  },

  /**
   * Relative standard deviation
   */
  rsd: (arr: number[]) => {
    const mean = arr.reduce((a, b) => a + b, 0) / arr.length;

    return (
      Math.sqrt(
        arr.reduce((prevSum, cur) => prevSum + (cur - mean) * (cur - mean), 0) / arr.length,
      ) / mean
    );
  },

  truncate: (n: number): number => (n < 0.01 ? n : Math.round(n * 100) / 100),
};
