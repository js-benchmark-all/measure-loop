# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { category, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

await category('hrtime')
  .bench('performance.now()', [], () => performance.now())
  .bench('Date.now()', [], () => Date.now())
  .run({ env, reporter });
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
import { category, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

await category('hrtime', { measureGC: true })
  .bench('performance.now()', [], () => performance.now())
  .bench('Date.now()', [], () => Date.now())
  .run({ env, reporter });
```
