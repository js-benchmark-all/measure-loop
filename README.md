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

// or using default options
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

## Compare with `mitata`
This library has a similar benchmark loop to `mitata` but with some API design differences:
- `mitata` continues a benchmark until both `min_samples` and `samples_threshold` is reached, `measure-loop` runs exactly the iterations you specified.
- `measure-loop` shuffles benchmark cases by default.
- `measure-loop` API is a more composable and pluggable.
- `measure-loop` GCs every iteration by default, `mitata` is opt-in via `inner_gc`.
- `mitata` has a better default reporter.
