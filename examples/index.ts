import { bench, env } from 'measure-loop/runner';
import reporter from 'measure-loop/reporter/compact';

const now = performance.now.bind(performance);

await bench('hrtime')
  .it('Date.now()', [], () => Date.now() * 1e6)
  .it('performance.now()', [], () => now() * 1e6)
  .it('env.hrtime()', [], env.hrtime)
  .run({ env, reporter });
