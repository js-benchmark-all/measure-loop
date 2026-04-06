// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { printRuns } from '../../result.js';
import { DIGITS, randstring } from '../../random.js';

const result = await measure(
  [() => randstring(DIGITS, 20)],
  (str) => {
    createSideEffect(str.includes('a'));
  },
  gc,
  hrtime,
  { debug: true }
);

console.error(result.debug);
printRuns(result.runtimes.slice(2));
