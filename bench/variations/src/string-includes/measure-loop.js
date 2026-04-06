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

printRuns(result.runtimes, true);
