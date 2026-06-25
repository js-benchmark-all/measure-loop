import { bench, category } from 'measure-loop';
import sideEffect from 'measure-loop/side-effect';

const all = category({
  warmupIters: 64,
  iters: 128,
});

const megamorphicObj = (i: number) => {
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
};

all.it(
  'without init',
  bench()
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
    .it('megamorphic object', [megamorphicObj], (o) => o.a + o.b)
    .it(
      'monomorphic array',
      [() => [Math.random(), Math.random()]],
      (o) => o[0] + o[1],
    )
    .it(
      'polymorphic array',
      [
        (i) =>
          i % 3 === 0
            ? [Math.random(), Math.random()]
            : i % 3 === 1
              ? [Math.random(), Math.random(), Math.random()]
              : [
                  Math.random(),
                  Math.random(),
                  Math.random(),
                  Math.random(),
                ],
      ],
      (o) => o[0] + o[1],
    ),
);

all.it(
  'with init',
  bench()
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
    }),
);

{
  const b = bench({
    gcOnce: true,
  });
  all.it('custom props', b);

  const callback = () => '';

  {
    const key = Symbol();
    b.it(
      'direct assign',
      [
        (i) => {
          const o = megamorphicObj(i);
          // @ts-ignore
          o[key] = callback;
          return o;
        },
      ],
      // @ts-ignore
      (o) => o[key](),
    );
  }

  {
    const map = new WeakMap();
    b.it(
      'WeakMap store',
      [
        (i) => {
          const o = megamorphicObj(i);
          map.set(o, callback);
          return o;
        },
      ],
      (o) => map.get(o)(),
    );
  }

  {
    const key = Symbol(),
      proto = {
        [key]: callback,
      };
    b.it(
      'prototype chain (override prototype)',
      [
        (i) => {
          const o = megamorphicObj(i);
          Object.setPrototypeOf(o, proto);
          return o;
        },
      ],
      // @ts-ignore
      (o) => o[key](),
    );

    b.it(
      'prototype chain (create with prototype)',
      [(i) => Object.assign(Object.create(proto), megamorphicObj(i))],
      (o) => o[key](),
    );
  }
}

export default all;
