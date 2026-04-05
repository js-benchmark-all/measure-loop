import { globSync } from 'node:fs';
import { join } from 'node:path';
import { fmt } from '../../scripts/lib/fmt.ts';

const cwd = join(import.meta.dirname, 'src');
const options = {
  stdout: 'inherit',
  cwd,
} as const;

const RUNNERS = {
  node: (file: string) => {
    Bun.spawnSync(['node', '--expose-gc', file], options);
  },
  deno: (file: string) => {
    Bun.spawnSync(['deno', '-A', '--v8-flags=--expose-gc', file], options);
  },
  bun: (file: string) => {
    Bun.spawnSync(['bun', file], options);
  },
};

const files = globSync('**/*.js', { cwd });

for (const runnerName in RUNNERS) {
  console.log(fmt.pc.bold(`\n# ${runnerName}`));

  for (const file of files) {
    console.log(fmt.pc.bold(`\n## ${file.slice(0, -3)}`));

    Bun.gc(true);

    // @ts-ignore
    RUNNERS[runnerName](file);
  }
}
