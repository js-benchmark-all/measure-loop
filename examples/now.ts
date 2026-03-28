import { gc } from '$/detect/gc';
import { hrtime } from '$/detect/hrtime';

import { createLoop } from '$';

import { format } from 'oxfmt';

const loop = await createLoop({
  gc, hrtime,
  fn: () => performance.now(),
  iters: 1000,
  batchIters: 128
});

console.log((await format('index.js', loop.toString())).code);
console.log('--------------------------------');

const runs: number[] = [];
const gcs: number[] = [];
const heaps: number[] = [];

// Warmup everything
loop([], [], []);

// Run
loop(runs, gcs, heaps);

console.log('runs:', runs);
console.log('gcs:', gcs);
console.log('heaps:', heaps);
