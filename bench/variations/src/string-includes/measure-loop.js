// @ts-check
import env from 'measure-loop/runner/env';
import { createSideEffect } from 'measure-loop/side-effect';
import { measure } from 'measure-loop/measure';

import { printRuns } from '../../result.js';
import { DIGITS, randstring } from '../../random.js';

const result = await measure(
  [() => randstring(DIGITS, 20)],
  (str) => {
    createSideEffect(str.includes('a'));
  },
  env.gc,
  env.hrtime,
  { debug: true },
);

printRuns(result.runtimes, true);
