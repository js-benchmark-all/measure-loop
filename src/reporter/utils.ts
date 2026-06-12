export const trunc = (v: number): number => Math.round(v * 100) / 100;

export const formatMs = (ms: number): string => {
  let unit = 'ms';

  if (ms < 1) {
    ms *= 1e3;
    unit = 'μs';

    if (ms < 1) {
      ms *= 1e3;
      unit = 'ns';

      if (ms < 1) {
        ms *= 1e3;
        unit = 'ps';
      }
    }
  } else if (ms >= 1e3) {
    ms /= 1e3;
    unit = 's';
  }

  return trunc(ms) + unit;
};

export const calcAvg = (results: number[]): number => {
  let total = 0;
  for (let i = 0; i < results.length; i++) total += results[i];
  return total / results.length;
};

export const calcVariance = (sortedResults: number[], avg: number): number => {
  let variance = 0;
  for (let i = 0; i < sortedResults.length; i++)
    variance += (sortedResults[i] - avg) * (sortedResults[i] - avg);
  return variance / sortedResults.length;
};
