// @ts-check
import env from 'measure-loop/runner/env';
import { createSideEffect } from 'measure-loop/side-effect';
import { measure } from 'measure-loop/measure';

import { printRuns } from '../../../result.js';

const result = await measure(
  [() => [Promise.resolve(0)]],
  async (p) => {
    createSideEffect(await p[0]);
  },
  env.gc,
  env.hrtime,
  { debug: true },
);

printRuns(result.runtimes, true);
