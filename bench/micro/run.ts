import { existsSync, globSync, writeFileSync } from 'node:fs';
import path from 'node:path';

import rtc from 'runtime-compiler/rolldown';
import { build, type MinifyOptions } from 'rolldown';

const { argv } = process;
if (argv.length < 4) {
  console.error('missing arguments.');
  console.log('usage: bun run.ts <target> <file> <format>');
  process.exit(1);
}

const MINIFY_OPTIONS: MinifyOptions = {
  codegen: {
    removeWhitespace: false,
  },
  mangle: false,
  compress: {
    unused: 'keep_assign',
    sequences: false,
  },
};
const { 2: target, 3: file, 4: format } = argv;

// Build file
writeFileSync(
  'run.js',
  `
  import { IS_BUILD } from 'runtime-compiler/env';

  import { env } from 'measure-loop';
  import { print } from 'measure-loop/env/print';
  import reporter from 'measure-loop/reporter${
    format === 'md' ? '/md' : format === 'json' ? '/json' : ''
  }';

  import b from './${path.join('src', file)}';
  ${
    !format
      ? 'b.run({ env, reporter })'
      : `(async () => {
        let r = await b.run({ env, reporter });
        IS_BUILD || ${format === 'md' ? 'print(r);' : format === 'json' ? 'print(JSON.stringify(r));' : ''};
      })()`
  };
`,
);

await build({
  input: 'run.js',
  output: {
    file: 'run.js',
    minify: MINIFY_OPTIONS,
  },
  plugins: [rtc()],
});

// Run the file
const spawn = !format
  ? (...args: string[]) => {
      Bun.gc(true);
      Bun.spawnSync(args, {
        stdin: 'ignore',
        stdout: 'inherit',
        stderr: 'inherit',
      });
    }
  : (...args: string[]) => {
      Bun.gc(true);
      const proc = Bun.spawnSync(args, {
        stdin: 'ignore',
        stderr: 'inherit',
      });
      writeFileSync(`results.${target}.${format}`, proc.stdout);
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
        minify: MINIFY_OPTIONS,
      },
      transform: {
        target: 'es6',
      },
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
    spawn(
      existsSync('quickjs/qjs') ? 'quickjs/qjs' : 'qjs',
      '--module',
      '--std',
      'run.js',
    );
    break;
  }

  // RuntimeError: memory access out of bounds
  case 'porffor': {
    spawn('porf', 'run.js');
    break;
  }

  case 'llrt': {
    spawn(
      globSync('llrt/target/*/release/llrt')[0] ??
        globSync('llrt/llrt-container-*')[0] ??
        'llrt',
      'run.js',
    );
    break;
  }

  default: {
    console.error('unknown target:', target);
    process.exit(1);
  }
}
