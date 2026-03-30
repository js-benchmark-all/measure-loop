# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

```ts
import { gc } from 'measure-loop/detect/gc';
import { hrtime } from 'measure-loop/detect/hrtime';
import { createSideEffect } from 'measure-loop/side-effect';
import { createLoop } from 'measure-loop';

const loop = await createLoop({
  // Auto detected functions
  gc, hrtime,
  // Function to benchmark
  fn: () => {
    createSideEffect(performance.now());
  }
});

const runs: number[] = [];
const gcs: number[] = [];

// Run and collect timings
loop(runs, gcs, []);

console.log('runs:', runs);
console.log('gcs:', gcs);
```

To run:
```sh
bun run bench.ts

# Expose manual GC for V8-based runtime.
node --expose-gc bench.ts
deno run --v8-flags=--expose-gc bench.ts
...
```

To collect heap usage:
```ts
import { gc } from 'measure-loop/detect/gc';
import { hrtime } from 'measure-loop/detect/hrtime';
import { detectHeapUsage } from 'measure-loop/detect/heap-usage';
import { createSideEffect } from 'measure-loop/side-effect';
import { createLoop } from 'measure-loop';

const loop = await createLoop({
  // Auto detected functions
  gc, hrtime,
  heapUsage: await detectHeapUsage(),
  // Function to benchmark
  fn: () => {
    createSideEffect(performance.now());
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
Note that collecting heap usage can increase variation of other samples.

The loop implementation is based on [mitata](https://github.com/evanwashere/mitata). Check it out it's a good library :).
