import { writeFileSync } from 'node:fs';
import path from 'node:path';

import rtc from 'runtime-compiler/rolldown';
import { build } from 'rolldown';

const { argv } = process;
if (argv.length < 4) {
  console.error('missing arguments.');
  console.log('usage: bun run.ts <target> <file>');
  process.exit(1);
}
const { 2: target, 3: file } = argv;

// Build file
writeFileSync(
  'run.js',
  `
  import { IS_BUILD } from 'runtime-compiler/env';

  import { env } from 'measure-loop';
  import reporter from 'measure-loop/reporter';

  import b from './${path.join('src', file)}';
  IS_BUILD || b.run({ env, reporter });
`,
);

await build({
  input: 'run.js',
  output: {
    file: 'run.js',
    minify: {
      codegen: {
        removeWhitespace: false
      },
      mangle: false,
      compress: false
    }
  },
  plugins: [rtc()]
});

// Run the file
const spawn = (...args: string[]) => {
  Bun.gc(true);
  Bun.spawnSync(args, {
    stdin: 'ignore',
    stdout: 'inherit',
    stderr: 'inherit',
  });
};

switch (target) {
  case 'bun': {
    spawn('bun', 'run', 'run.js');
    break;
  }

  case 'deno': {
    spawn(
      'deno',
      'run',
      '--v8-flags=--expose-gc',
      '--allow-env',
      'run.js',
    );
    break;
  }

  case 'node': {
    spawn('node', '--expose-gc', 'run.js');
    break;
  }

  case 'v8': {
    spawn('v8', '--expose-gc', '--module', 'run.js');
    break;
  }

  case 'jsc': {
    spawn('jsc', '-m', 'run.js');
    break;
  }

  // TODO: hermes for unknown reasons output NaN
  case 'hermes': {
    await build({
      input: 'run.js',
      output: {
        file: 'run.js',
        minify: {
          codegen: {
            removeWhitespace: false
          },
          mangle: false,
          compress: false
        },
      },
      transform: {
        target: 'es6'
      }
    });
    spawn(
      'hermes',
      // disable warnings
      '-Wno-undefined-variable',
      // expose internal stuff
      '-enable-hermes-internal',
      '-Xhermes-internal-test-methods',
      // es6
      '-Xes6-promise',
      '-Xes6-class',
      // strict
      '-strict',
      'run.js',
    );
    break;
  }

  case 'spidermonkey': {
    spawn('spidermonkey', '-m', 'run.js');
    break;
  }

  case 'quickjs': {
    spawn('quickjs/qjs', '--module', '--std', 'run.js');
    break;
  }

  // RuntimeError: memory access out of bounds
  case 'porffor': {
    spawn('porf', 'run.js');
    break;
  }

  default: {
    console.error('unknown target:', target);
    process.exit(1);
  }
}
