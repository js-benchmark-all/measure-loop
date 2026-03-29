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
const heaps: number[] = [];

// Run and collect timings
loop(runs, gcs, heaps);

console.log('runs:', runs);
console.log('gcs:', gcs);
console.log('heaps:', heaps);
```

To run:
```sh
bun run bench.ts

# Expose manual GC for V8-based runtime.
node --expose-gc bench.ts
deno run --v8-flags=--expose-gc bench.ts
...
```

The loop implementation is based on [mitata](https://github.com/evanwashere/mitata). Check it out it's a good library :).
