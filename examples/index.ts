import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

await bench('hrtime')
  .it('performance.now()', [], performance.now)
  .it('Date.now()', [], Date.now)
  .run({ env, reporter });
