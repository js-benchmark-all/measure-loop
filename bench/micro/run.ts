import { writeFileSync } from 'node:fs';
import path from 'node:path';

const { argv } = process;
if (argv.length < 4) {
  console.error('missing arguments.');
  console.log('usage: bun run.ts <target> <file>');
  process.exit(1);
}
const { 2: target, 3: file } = argv;

writeFileSync('run.js', `
  import { bench, env } from 'measure-loop/runner';
  import reporter from 'measure-loop/reporter';

  import b from './${path.join('src', file)}';
  b.run({ env, reporter });
`);

const bundleFile = () => Bun.build({
  entrypoints: ['run.js'],
  outdir: '.',
  format: 'esm'
});

const spawn = (...args: string[]) => {
  Bun.gc(true);
  Bun.spawnSync(args, {
    stdin: 'ignore',
    stdout: 'inherit',
    stderr: 'inherit'
  });
}

switch (target) {
  case 'bun': {
    spawn('bun', 'run', 'run.js');
    break;
  }

  case 'deno': {
    Bun.gc(true);
    spawn('deno', 'run', '--v8-flags=--expose-gc', '--allow-env', 'run.js');
    break;
  }

  case 'node': {
    await bundleFile();
    spawn('node', '--expose-gc', 'run.js');
    break;
  }

  case 'v8': {
    await bundleFile();
    spawn('v8', '--expose-gc', '--module', 'run.js');
    break;
  }

  case 'jsc': {
    await bundleFile();
    spawn('jsc', '-m', 'run.js');
    break;
  }

  // case 'hermes': {
  //   bundleFile({
  //     'async-await': false
  //   });
  //   await Bun.$`hermes -Wno-undefined-variable -enable-eval -enable-hermes-internal -optimized-eval -strict -Xes6-promise -Xes6-class run.js`;
  //   break;
  // }

  case 'spidermonkey': {
    await bundleFile();
    spawn('spidermonkey', '-m', 'run.js');
    await Bun.$`spidermonkey -m run.js`;
    break;
  }

  case 'porffor': {
    await bundleFile();
    spawn('porf', 'run.js');
  }

  default: {
    console.error('unknown target:', target);
    process.exit(1);
  }
}
