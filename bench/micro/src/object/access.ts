import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const withoutInit = bench()
  .it(
    'monomorphic object',
    [
      () => ({
        a: Math.random(),
        b: Math.random(),
      }),
    ],
    (o) => o.a + o.b,
  )
  .it(
    'polymorphic object',
    [
      (i) =>
        i % 3 === 0
          ? {
              a: Math.random(),
              b: Math.random(),
            }
          : i % 3 === 1
            ? {
                b: Math.random(),
                a: Math.random(),
                c: Math.random(),
              }
            : {
                b: Math.random(),
                d: Math.random(),
                a: Math.random(),
              },
    ],
    (o) => o.a + o.b,
  )
  .it(
    'megamorphic object',
    [
      (i) => {
        i %= 10;
        return i === 0
          ? {
              a: Math.random(),
              b: Math.random(),
            }
          : i === 1
            ? {
                c: Math.random(),
                a: Math.random(),
                b: Math.random(),
              }
            : i === 2
              ? {
                  d: Math.random(),
                  a: Math.random(),
                  b: Math.random(),
                }
              : i === 3
                ? {
                    d: Math.random(),
                    a: Math.random(),
                    b: Math.random(),
                    c: Math.random(),
                  }
                : i === 4
                  ? {
                      d: Math.random(),
                      b: Math.random(),
                      e: Math.random(),
                      a: Math.random(),
                    }
                  : i === 5
                    ? {
                        b: Math.random(),
                        c: Math.random(),
                        a: Math.random(),
                        e: Math.random(),
                      }
                    : i === 6
                      ? {
                          a: Math.random(),
                          e: Math.random(),
                          b: Math.random(),
                        }
                      : i === 7
                        ? {
                            f: Math.random(),
                            b: Math.random(),
                            a: Math.random(),
                          }
                        : i === 8
                          ? {
                              f: Math.random(),
                              b: Math.random(),
                              a: Math.random(),
                              c: Math.random(),
                            }
                          : {
                              f: Math.random(),
                              a: Math.random(),
                              d: Math.random(),
                              b: Math.random(),
                            };
      },
    ],
    (o) => o.a + o.b,
  )
  .it(
    'monomorphic array',
    [() => [Math.random(), Math.random()]],
    (o) => o[0] + o[1],
  )
  .it(
    'polymorphic array',
    [() => [Math.random(), Math.random()]],
    (o) => o[0] + o[1],
  );

const withInit = bench()
  .it('monomorphic object', [], () => {
    const o = {
      a: 0,
      b: 1,
    };
    sideEffect(o);
    return o.a + o.b;
  })
  .it('monomorphic array', [], () => {
    const o = [0, 1];
    sideEffect(o);
    return o[0] + o[1];
  });

export default category({
  warmupIters: 64,
  iters: 256,
})
  .it('without init', withoutInit)
  .it('with init', withInit);
