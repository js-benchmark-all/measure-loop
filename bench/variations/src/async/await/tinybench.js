// @ts-check
import { createSideEffect } from '$/side-effect';
import { Bench } from 'tinybench';

import { print } from '../../../math.js';

let p = Promise.resolve(0);
createSideEffect(p);

const bench = new Bench({
  retainSamples: true,
  warmupIterations: 4,
  time: 100,
}).add(
  'task',
  async () => {
    createSideEffect(await p);
  },
  {
    beforeEach: () => {
      p = Promise.resolve(0);
    },
  },
);

await bench.run();
print(
  'runs',
  // @ts-ignore
  bench.results[0].latency.samples.map((sample) => sample * 1e6),
  1,
);
