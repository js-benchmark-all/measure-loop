# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

await bench('hrtime')
  .it('performance.now()', [], () => performance.now())
  .it('Date.now()', [], () => Date.now())
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
import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

// Default options
await bench('hrtime', { measureGC: true })
  .it('performance.now()', [], () => performance.now())
  .it('Date.now()', [], () => Date.now())
  .run({ env, reporter });
```

To add child categories:
```ts
const child = bench('child');
parent.category(child);
```

To add computed parameters:
```ts
const params = [
  () => generateStrings(),
] as const;

bench('find substring')
  .it(
    'knuth-morris-pratt',
    params,
    ({ str, substr }) => kmp(str, substr)
  )
  .it(
    'boyer-moore-horspool',
    params,
    ({ str, substr }) => bmh(str, substr)
  );
```
