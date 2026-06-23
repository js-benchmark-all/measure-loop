// @ts-nocheck
type Arch =
  | 'wasi'
  | 'x86'
  | 'x64'
  | 'arm'
  | 'arm64'
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
    | 'porffor'
    | 'browser'
    | 'jsc'
    | undefined,
  runtimeVersion: string | undefined,
  runtimePlatform:
    | 'js + wasm'
    | Arch
    | `${Arch}-${'osx' | 'android' | 'windows'}`
    | 'linux'
    | (string & {})
    | undefined;

if (globalThis.process) {
  const v = process.versions;

  if (v.bun) {
    runtime = 'bun';
    runtimeVersion = v.bun;
  } else if (v.deno) {
    runtime = 'deno';
    runtimeVersion = v.deno;
  } else if (v.node) {
    runtime = 'node';
    runtimeVersion = v.node;
  } else if (v.llrt) {
    runtime = 'llrt';
    runtimeVersion = v.llrt;
  } else if (v.webcontainer) {
    runtime = 'webcontainer';
    runtimeVersion = v.webcontainer;
  }

  runtimePlatform = process.arch + '-' + process.platform;
} else if (globalThis.d8) {
  runtime = 'v8';
  runtimeVersion = version();
  runtimePlatform = os.name;
} else if (globalThis.HermesInternal) {
  runtime = 'hermes';
  runtimeVersion =
    HermesInternal.getRuntimeProperties()['OSS Release Version'];
} else if (globalThis.inIon && globalThis.performance?.mozMemory) {
  runtime = 'spidermonkey';

  {
    let build = getBuildConfiguration();
    if (build.wasi) runtimePlatform = 'wasi';
    else if (build.x86) runtimePlatform = 'x86';
    else if (build.x64) runtimePlatform = 'x64';
    else if (build.arm) runtimePlatform = 'arm';
    else if (build.arm64) runtimePlatform = 'arm64';
    else if (build.mips64) runtimePlatform = 'mips64';
    else if (build.loong64) runtimePlatform = 'loong64';
    else if (build.riscv64) runtimePlatform = 'riscv64';

    if (runtimePlatform) {
      if (build.osx) runtimePlatform += '-osx';
      else if (build.android) runtimePlatform += '-android';
      else if (build.windows) runtimePlatform += '-windows';
    }
  }
} else if (globalThis.os && globalThis.std) {
  runtime = 'quickjs';
  runtimePlatform = os.platform;
} else if (globalThis.$?.agent) {
  runtime = 'jsc';
} else if (globalThis.navigator) {
  if (globalThis.window) {
    runtime = 'browser';
  } else if (navigator.userAgent.startsWith('Porffor/')) {
    runtime = 'porffor';
    runtimeVersion = navigator.userAgent.slice(8);
  }
}
