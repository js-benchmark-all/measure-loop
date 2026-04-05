# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { gc, hrtime } from 'measure-loop/env'; // Auto detect available functions

import { createSideEffect } from 'measure-loop/side-effect'; // Avoid calls from being optimized out
import { measure } from 'measure-loop/measure';

const result = await measure(
  () => {
    createSideEffect(performance.now());
  },
  gc,
  hrtime
);

// Run and collect timings
console.log('runtimes:', result.runtimes);
```

To run:
```sh
bun run bench.ts

# Expose manual GC for V8-based runtime.
node --expose-gc bench.ts
deno run --v8-flags=--expose-gc bench.ts
...
```

To collect GC time:
```ts
import { gc, hrtime } from 'measure-loop/env';

import { createSideEffect } from 'measure-loop/side-effect';
import { measure } from 'measure-loop/measure';

const result = await measure(
  () => {
    createSideEffect(performance.now());
  },
  gc,
  hrtime,
  { measureGC: true }
);

console.log('runtimes:', result.runtimes);
console.log('gcs:', result.gcs);
```

The loop implementation is based on [mitata](https://github.com/evanwashere/mitata). Check it out it's a good library :).
