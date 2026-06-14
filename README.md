# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter';

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
import reporter from 'measure-loop/reporter';

await bench('hrtime')
  .it('performance.now()', [], () => performance.now(), { measureGC: true })
  .it('Date.now()', [], () => Date.now(), { measureGC: true })
  .run({ env, reporter });

// to apply to all child benchmarks
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
// Doesn't get measured
const params = [
  (i) => generateString(i + 1),
  () => 'abc'
] as const;

const acTrie = buildTrie('abc');

bench('find substring')
  .it(
    'knuth-morris-pratt',
    params,
    (str, substr) => kmp(str, substr)
  )
  .it(
    'boyer-moore',
    params,
    (str, substr) => bm(str, substr)
  );
  .it(
    'boyer-moore-horspool',
    params,
    (str, substr) => bmh(str, substr)
  )
  .it(
    'aho-corasick',
    [
      (i) => generateString(i + 1),
      () => acTrie
    ],
    (str, trie) => ac(str, trie)
  );
```

### Options
Benchmark options can be passed in two ways:
```ts
// Apply options to all child benchmarks
bench('hrtime', { gcOnce: true })
  .it('performance.now()', [], () => performance.now())
  .it('Date.now()', [], () => Date.now())
  .category(childBench);

// Apply options to a specific benchmark
bench('hrtime')
  .it('performance.now()', [], () => performance.now(), {
    gcOnce: true
  })
  .it('Date.now()', [], () => Date.now());

// Both
bench('hrtime', { iters: 120, gcOnce: false })
  .it('performance.now()', [], () => performance.now(), {
    // Override gcOnce option but still keep iters = 120
    gcOnce: true
  })
  .it('Date.now()', [], () => Date.now())
  .category(childBench);
```

Measure options:
- `warmupIters`: Warmup iterations count, defaults to `16`.
- `iters`: Benchmark iterations count, defaults to `128`.
- `debug`: Include debug info in result, defaults to `false`.

Compile options:
- `batch`: Number of calls in an iteration, defaults to `4096`.
- `inlineCalls`: Number of calls to inline in an iteration, defaults to `4`.
- `measureGC`: Whether to collect GC timings, enable this may affect runs timing accuracy, defaults to `false`.
- `gcOnce`: Whether to only `gc()` on start instead of every iteration, enable this when your benchmark code have few allocations to increase runs timing accuracy.
