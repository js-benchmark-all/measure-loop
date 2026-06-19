import { bench } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

export default bench()
  .it('await promise', [
    (i) => [Promise.resolve(i)]
  ], async (p) => {
    sideEffect(await p[0]);
  })
  .it('await non-promise', [
    (i) => [i]
  ], async (p) => {
    sideEffect(await p[0]);
  })
  .it('generator', [
    function* (i) {
      yield i;
      yield i + 1;
      yield i + 2;
      yield i + 4;
    }
  ], (p) => {
    for (const v of p)
      sideEffect(v);
  })
  .it('async generator', [
    async function* (i) {
      yield i;
      yield await i;
      yield Promise.resolve(i);
      yield await Promise.resolve(i);
    }
  ], async (p) => {
    for await (const v of p)
      sideEffect(v);
  });
