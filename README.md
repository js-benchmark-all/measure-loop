# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { gc } from 'measure-loop/detect/gc';
import { hrtime } from 'measure-loop/detect/hrtime';

import { createSideEffect } from 'measure-loop/side-effect';
import { createLoop, warmupLoop } from 'measure-loop';

const loop = await createLoop(
  { gc, hrtime },
  {
    fn: () => {
      createSideEffect(performance.now());
    }
  }
);
warmupLoop(loop);

// Run and collect timings
const runs: number[] = [];
loop(runs, [], []);
console.log('runs:', runs);
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
import { createLoop, warmupLoop } from 'measure-loop';

const loop = await createLoop(
  {
    gc, hrtime,
    heapUsage: await detectHeapUsage()
  },
  {
    fn: () => {
      createSideEffect(performance.now());
    }
  }
);
warmupLoop(loop);

// Run and collect timings
const runs: number[] = [];
const heaps: number[] = [];

loop(runs, [], heaps);

console.log('runs:', runs);
console.log('heaps:', heaps);
```
Note that collecting heap usage can increase variation of other samples.

## Other options
```ts
await createLoop({ ... }, {
  // Whether to collect GC timings
  measureGC: false,

  // Number of calls in an iteration
  batch: 4096,

  // Calls to inline
  inlineCalls: 4

  // With batch = 4097 and inlineCalls = 4:
  // for (let i = 0; i < 1024; i++){fn();fn();fn();fn()}fn();
});

// Warmup the loop, stops when running time > threshold and total iterations > iters
warmupLoop(loop, threshold?, iters?);
```

The loop implementation is based on [mitata](https://github.com/evanwashere/mitata). Check it out it's a good library :).
