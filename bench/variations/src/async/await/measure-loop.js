// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { print } from '../../../math.js';

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

print('runs', result.runtimes, 4096);
