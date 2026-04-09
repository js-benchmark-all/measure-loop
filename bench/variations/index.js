// @ts-check
import { globSync } from 'node:fs';
import { join } from 'node:path';

import { fmt } from '../../scripts/lib/fmt.ts';
import { getRuns } from './result.js';
import { print } from './math.js';

const cwd = join(import.meta.dirname, 'src');

const options = /** @type {const} */ ({
  cwd,
  stderr: 'inherit',
});

/**
 * @type {Record<string, (file: string) => Buffer<ArrayBufferLike>>}
 */
const RUNNERS = {
  node: (file) => Bun.spawnSync(['node', '--expose-gc', file], options).stdout,
  deno: (file) => Bun.spawnSync(['deno', '-A', '--v8-flags=--expose-gc', file], options).stdout,
  bun: (file) => Bun.spawnSync(['bun', file], options).stdout,
};

const LOOP_TIME = new Array(50).fill(0);

const files = globSync('**/*.js', { cwd });

for (const runnerName in RUNNERS) {
  console.log(fmt.pc.bold(`\n# ${runnerName}`));

  const runner = RUNNERS[runnerName];
  for (const file of files) {
    console.log(fmt.pc.bold(`\n## ${file.slice(0, -3)}`));

    Bun.gc(true);

    const runs = LOOP_TIME.flatMap(() => getRuns(runner(file).toString()));
    print(runs);
  }
}
