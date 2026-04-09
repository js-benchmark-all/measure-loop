import assert from 'node:assert';

const RUN_START = '__VARIATIONS_RUN_START__';
const RUN_END = '__VARIATIONS_RUN_END__';

/**
 * @param {number[]} runs
 */
export const printRuns = (runs, d = false) => {
  if (d) {
    runs.sort((a, b) => a - b);
    runs = runs.slice(2, -2);
  }
  console.log(RUN_START + JSON.stringify(runs) + RUN_END);
};

/**
 * @param {string} str
 * @returns {number[]}
 */
export const getRuns = (str) => {
  let startIdx = str.indexOf(RUN_START);
  assert.notStrictEqual(startIdx, -1);
  startIdx += RUN_START.length;

  const endIdx = str.indexOf(RUN_END, startIdx);
  assert.notStrictEqual(endIdx, -1);

  return JSON.parse(str.slice(startIdx, endIdx));
};
