# measure-loop
A very accurate measure loop for benchmarking purposes.

```ts
import { gc } from 'measure-loop/detect/gc';
import { hrtime } from 'measure-loop/detect/hrtime';
import { sideEffect } from 'measure-loop/side-effect';
import { createLoop } from 'measure-loop';

const loop = await createLoop({
  // Auto detected functions
  gc, hrtime,
  // Function to benchmark
  fn: () => {
    sideEffect(performance.now());
  }
});

const runs: number[] = [];
const gcs: number[] = [];
const heaps: number[] = [];

// Run and collect timings
loop(runs, gcs, heaps);

console.log('runs:', runs);
console.log('gcs:', gcs);
console.log('heaps:', heaps);
```

The idea comes from [mitata](https://github.com/evanwashere/mitata). Please check it out it's a good library :).
