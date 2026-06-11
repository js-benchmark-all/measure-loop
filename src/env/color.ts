type ColorFn = (str: string) => string;

// @ts-nocheck
const proc = globalThis.process;

export const supportsColor: boolean =
  proc &&
  (proc.platform === 'win32' ||
    (proc.stdout?.isTTY && proc.env.TERM !== 'dumb') ||
    'FORCE_COLOR' in proc.env ||
    'CI' in proc.env) &&
  !('NO_COLOR' in proc.env);
