import { $ } from 'bun';
import { SNAP } from '../lib/constants.ts';
import { fmt } from '../lib/fmt.ts';

const TARGETS = ['bun', 'node', 'deno'] as const;
const targets = process.argv.slice(2);

targets.length > 0 || targets.push(...TARGETS);

$.cwd(SNAP);
for (const target of targets) {
  console.log('running target:', fmt.name(target));
  if (target === 'node')
    await $`node --expose-gc index.ts node`;
  else if (target === 'deno')
    await $`deno run -A --v8-flags=--expose-gc index.ts deno`;
  else if (target === 'bun')
    await $`bun index.ts bun`;
  else {
    console.log('unknown target:', fmt.name(target));
    console.log('available targets:', TARGETS.map(fmt.name).join(', '));
    process.exit(1);
  }
}
