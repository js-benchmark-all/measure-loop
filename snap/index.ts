import { format } from 'oxfmt';
import { measure } from 'mitata';
import { join } from 'node:path';

import { gc } from '$/detect/gc';
import { hrtime } from '$/detect/hrtime';
import { createLoop } from '$';
import { sideEffect } from '$/side-effect';

import { math } from './utils/math.ts';

import { SNAP } from '../scripts/lib/constants.ts';

const CODE = join(SNAP, 'code');
const RUNS = join(SNAP, 'runs');

const print = async (name: string, runs: number[], code: string) => {
  runs = runs.toSorted((a, b) => a - b);

  const rsd = math.rsd(runs);

  console.log(name + ':');
  runs.some((x) => x < 10) && console.warn('  optimized out!');
  console.log('  variation:', rsd);

  console.log('--------------------------------');

  const debugPath = join(CODE, name + '.js');
  const runsPath = join(RUNS, name + '.js');

  await Promise.all([
    Bun.write(debugPath, (await format(debugPath, code)).code),
    Bun.write(
      runsPath,
      (
        await format(
          runsPath,
          `export default ${JSON.stringify({
            runs,
            rsd,
            avg: runs.reduce((a, b) => a + b, 0) / runs.length,
            p50: math.percentile(runs, 0.5),
            p75: math.percentile(runs, 0.75),
            p99: math.percentile(runs, 0.99),
          })}`,
        )
      ).code,
    ),
  ]);
};

{
  //
  // hrtime()
  //
  const name = 'hrtime',
    fn = () => {
      sideEffect(hrtime());
    };

  {
    const loop = await createLoop({
      gc,
      hrtime,
      fn,
    });

    // Run
    const runs: number[] = [];
    loop(runs, [], []);

    await print(join(name, 'measure-loop'), runs, loop.toString());
  }

  {
    const { samples, debug } = await measure(fn, {
      inner_gc: true,
    });

    await print(join(name, 'mitata'), samples, debug);
  }
}

{
  //
  // math()
  //
  const name = 'math',
    fn = (a: number, b: number, c: number) => {
      sideEffect(
        a * b +
          Math.ceil((c * b) / 1e3) +
          Math.floor((b * c * a) / 1e2) +
          a / (b + c + 1) +
          b / (a + c + 1) +
          c / (a + b + 1) +
          c +
          Math.ceil((c * b) / 1e3) +
          Math.floor((b * c * a) / 1e2) +
          Math.sin(a + b) +
          Math.cos(c + b * a),
      );
    };

  {
    const { samples, debug } = await measure(
      function* () {
        yield {
          0: Math.random,
          1: Math.random,
          2: Math.random,
          bench: fn,
        };
      },
      {
        inner_gc: true,
      },
    );

    await print(join(name, 'mitata'), samples, debug);
  }

  {
    const loop = await createLoop({
      gc,
      hrtime,

      params: [Math.random, Math.random, Math.random],
      fn,
    });

    // Run
    const runs: number[] = [];
    loop(runs, [], []);

    await print(join(name, 'measure-loop'), runs, loop.toString());
  }
}
