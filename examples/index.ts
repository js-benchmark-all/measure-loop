import { category, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

await category('hrtime')
  .bench('performance.now()', [], performance.now)
  .bench('Date.now()', [], Date.now)
  .run({ env, reporter });
