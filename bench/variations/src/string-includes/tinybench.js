// @ts-check
import { createSideEffect } from '$/side-effect';
import { Bench } from 'tinybench';

import { print } from '../../math.js';
import { DIGITS, randstring } from '../../random.js';

let str = '';
createSideEffect(str);

const bench = new Bench({
  retainSamples: true,
  warmupIterations: 4,
  time: 100,
}).add(
  'task',
  () => {
    createSideEffect(str.includes('a'));
  },
  {
    beforeEach: () => {
      str = randstring(DIGITS, 20);
    },
  },
);

bench.runSync();
print(
  // @ts-ignore
  bench.results[0].latency.samples.map((sample) => sample * 1e6),
  1,
);
