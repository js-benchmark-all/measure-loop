# measure-loop
An accurate, runtime-agnostic measure loop for benchmarking purposes.

## Usage
```ts
import { bench, env } from 'measure-loop';
import reporter from 'measure-loop/reporter';

await bench()
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
import { bench, env } from 'measure-loop';
import reporter from 'measure-loop/reporter';

await bench()
  .it('performance.now()', [], () => performance.now(), { measureGC: true })
  .it('Date.now()', [], () => Date.now(), { measureGC: true })
  .run({ env, reporter });

// to apply to all child benchmarks
await bench({ measureGC: true })
  .it('performance.now()', [], () => performance.now())
  .it('Date.now()', [], () => Date.now())
  .run({ env, reporter });
```

To add computed parameters:
```ts
// Doesn't get measured
const params = [
  (i) => generateString(i + 1),
  () => 'abc'
] as const;

const acTrie = buildTrie('abc');

bench()
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
bench({ gcOnce: true })
  .it('performance.now()', [], () => performance.now())
  .it('Date.now()', [], () => Date.now());

// Apply options to a specific benchmark
bench()
  .it('performance.now()', [], () => performance.now(), {
    gcOnce: true
  })
  .it('Date.now()', [], () => Date.now());

// Both
bench({ iters: 120, gcOnce: false })
  .it('performance.now()', [], () => performance.now(), {
    // Override gcOnce option but still keep iters = 120
    gcOnce: true
  })
  .it('Date.now()', [], () => Date.now());
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

### Categories
Benchmarks can be separated into categories:
```ts
import { bench, category, env } from 'measure-loop';
import reporter from 'measure-loop/reporter';

const runtimeValidators = bench()
  .it(...)
  .it(...);

const jittedValidators = bench()
  .it(...)
  .it(...);

await category()
  .it('runtime', runtimeValidators)
  .it('jit', jittedValidators)
  .run({ env, reporter });
```

Default options can be passed down similar to `bench`:
```ts
category({ gcOnce: true })
  .it(...)
  .it(...);
```

Categories can be nested:
```ts
const runtimeValidators = category()
  .it(...)
  .it(...);

const jittedValidators = category()
  .it(...)
  .it(...);

// Default options if specified will be passed down to child categories
category()
  .it('runtime', runtimeValidators)
  .it('jit', jittedValidators);
```

### Reporters
Reporters can hook to different phases of the benchmark to print and collect results.
```ts
// Default reporter (pretty print result)
import reporter from 'measure-loop/reporter';

await run({ env, reporter });

// JSON reporter
import reporter from 'measure-loop/reporter/json';

const json = await run({ env, reporter });
writeFileSync('results.json', JSON.stringify(json, null, 2));

// Markdown reporter
import md from 'measure-loop/reporter/md';

const md = await run({ env, reporter });
writeFileSync('results.md', md);
```

The reporter API will be stable after 1.0.

## JS Enviroments
See [./bench/micro/README.md](./bench/micro/README.md) on Github for supported JS enviroments.
