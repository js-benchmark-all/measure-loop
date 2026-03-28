# measure-loop
A very accurate measure loop for benchmarking purposes.

```ts
import { gc } from 'measure-loop/detect/gc';
import { hrtime } from 'measure-loop/detect/hrtime';

import { createLoop } from 'measure-loop';

import { format } from 'oxfmt';

const loop = await createLoop({
  // Auto detected functions
  gc, hrtime,
  // Function to benchmark
  fn: () => performance.now(),
  // Number of iterations
  iters: 1000,
  // Number of calls in an iteration
  batchIters: 128
});

const runs: number[] = [];
const gcs: number[] = [];
const heaps: number[] = [];

// Warmup everything
loop([], [], []);

// Run and collect timings
loop(runs, gcs, heaps);

console.log('runs:', runs);
console.log('gcs:', gcs);
console.log('heaps:', heaps);
```

The idea comes from [mitata](https://github.com/evanwashere/mitata). Please check it out it's a good library :).
