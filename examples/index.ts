import { category, reporters, env } from 'measure-loop/runner';

await category('hrtime')
  .bench('performance.now()', [], performance.now)
  .bench('Date.now()', [], Date.now)
  .run({
    env,
    reporter: reporters.compact
  });
