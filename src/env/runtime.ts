// @ts-nocheck
type Arch =
  | 'arm'
  | 'x64'
  | 'x86'
  | 'wasi'
  | 'arm64'
  | 'mips32'
  | 'mips64'
  | 'loong64'
  | 'riscv64';

export let runtime:
    | 'bun'
    | 'deno'
    | 'llrt'
    | 'webcontainer'
    | 'node'
    | 'v8'
    | 'hermes'
    | 'spidermonkey'
    | 'firefox'
    | 'porffor'
    | 'chromium'
    | 'webkit'
    | 'browser'
    | 'jsc'
    | undefined,
  runtimeVersion: string | undefined,
  runtimeArch:
    | 'js + wasm'
    | Arch
    | `${Arch}-${'osx' | 'linux' | 'android' | 'windows'}`
    | (string & {})
    | undefined;

if (globalThis.Bun) {
  runtime = 'bun';
  runtimeVersion = Bun.version;
  runtimeArch = process.arch + '-' + process.platform;
} else if (globalThis.Deno) {
  runtime = 'deno';
  runtimeVersion = Deno.version.deno;
  runtimeArch = Deno.build.target;
} else if (globalThis.process) {
  const v = process.versions;

  if (v.llrt) {
    runtime = 'llrt';
    runtimeVersion = v.llrt;
  } else if (v.webcontainer) {
    runtime = 'webcontainer';
    runtimeVersion = v.webcontainer;
    runtimeArch = 'js + wasm';
  } else if (v.node) {
    runtime = 'node';
    runtimeVersion = v.node;
  }

  runtimeArch = process.arch + '-' + process.platform;
} else if (globalThis.d8) {
  runtime = 'v8';
  runtimeVersion = version();
} else if (globalThis.HermesInternal) {
  runtime = 'hermes';
  runtimeVersion =
    HermesInternal.getRuntimeProperties()['OSS Release Version'];
} else if (globalThis.inIon && globalThis.performance?.mozMemory) {
  runtime = 'spidermonkey';

  try {
    const build = getBuildConfiguration();

    const arch = [
      'arm',
      'x64',
      'x86',
      'wasi',
      'arm64',
      'mips32',
      'mips64',
      'loong64',
      'riscv64',
    ].find((k) => k in build);
    if (arch) {
      const platform = ['osx', 'linux', 'android', 'windows'].find(
        (k) => k in build,
      );
      runtimeArch = platform ? arch + '-' + platform : arch;
    }
  } catch {
    globalThis.isAvxPresent?.() && (runtimeArch = 'x86_64');
  }
} else if (globalThis.navigator) {
  if (navigator.userAgent.startsWith('Porffor/')) {
    runtime = 'porffor';
    runtimeVersion = navigator.userAgent.slice(8);
  } else if (globalThis.window) {
    if (Error.prepareStackTrace) runtime = 'chromium';
    else if (new Error().stack.includes('runtime@'))
      runtime = 'webkit';
    else runtime = 'browser';
  }
} else if (
  globalThis.window &&
  globalThis.netscape &&
  globalThis.InternalError
) {
  runtime = 'firefox';
} else if (globalThis.os && globalThis.std) {
  runtime = 'quickjs';
} else if (new Error().stack.includes('runtime@')) {
  runtime = 'jsc';
}
