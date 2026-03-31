// @ts-check
import { gc } from '$/detect/gc';
import { hrtime } from '$/detect/hrtime';
import { createSideEffect } from '$/side-effect';

import { createLoop, warmupLoop } from '$';

import { print } from '../../math.js';

const loop = await createLoop(
  () => {
    const str = '' + Math.random();
    return () => {
      createSideEffect(str.includes('a'));
    };
  },
  gc,
  hrtime,
);
warmupLoop(loop);

/**
 * @type {number[]}
 */
const runs = [];
loop(runs, [], []);
print('runs', runs, 4096);
