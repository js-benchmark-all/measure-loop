// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { print } from '../../math.js';

const result = await measure(
  () => {
    const str = '' + Math.random();
    return () => {
      createSideEffect(str.includes('a'));
    };
  },
  gc,
  hrtime,
);

print('runs', result.runtimes, 4096);
