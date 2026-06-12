import { measure } from 'measure-loop/measure';
import { gc } from 'measure-loop/env/gc';
import { hrtime } from 'measure-loop/env/hrtime';

import { formatHz } from 'measure-loop/reporter/utils';

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

{
  const { runs, debug } = await measure([], () => {}, gc, hrtime, {
    inlineCalls: 1,
    warmupIters: 0,
    gcOnce: true,
    debug: true,
  });
  const avg = runs.reduce((a, b) => a + b, 0) / runs.length;
  console.log('measure-loop:', formatHz(1e3 / avg));

  writeFileSync(join(import.meta.dirname, 'measure-loop-debug.js'), debug.content);
}
