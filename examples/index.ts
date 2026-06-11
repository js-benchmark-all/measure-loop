import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter';

await bench('hrtime')
  .it('Date.now()', [], Date.now)
  .it('env.hrtime()', [], env.hrtime)
  .run({ env, reporter });
