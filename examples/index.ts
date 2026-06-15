import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter';

await bench({ gcOnce: true })
  .it('env.hrtime()', [], env.hrtime)
  .it('performance.now()', [], () => performance.now())
  .run({ env, reporter });
