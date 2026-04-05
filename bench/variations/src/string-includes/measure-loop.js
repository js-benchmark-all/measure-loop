// @ts-check
import { gc, hrtime } from '$/env';
import { createSideEffect } from '$/side-effect';
import { measure } from '$/measure';

import { print } from '../../math.js';
import { DIGITS, randstring } from '../../random.js';

const result = await measure(
  () => {
    const str = randstring(DIGITS, 20);
    return () => {
      createSideEffect(str.includes('a'));
    };
  },
  gc,
  hrtime,
);

print(result.runtimes, 4096);
