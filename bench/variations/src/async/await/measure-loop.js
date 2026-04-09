// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { printRuns } from '../../../result.js';

const result = await measure(
  [() => [Promise.resolve(0)]],
  async (p) => {
    createSideEffect(await p[0]);
  },
  gc,
  hrtime,
  { debug: true },
);

printRuns(result.runtimes, true);
