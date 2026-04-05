// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { printRuns } from '../../../result.js';

const result = await measure(
  () => {
    const p = Promise.resolve(0);
    return async () => {
      createSideEffect(await p);
    };
  },
  gc,
  hrtime,
);

printRuns(result.runtimes);
