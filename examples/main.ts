import { bench, env } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

export default bench({ gcOnce: true })
  .it('env.hrtime()', [], () => {
    sideEffect(env.hrtime());
  })
  .it('performance.now()', [], () => {
    sideEffect(performance.now());
  });
