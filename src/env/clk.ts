import { hrtime } from "./hrtime.ts";

const fn = () => { };

/**
 * noop time in milliseconds.
 */
export let noop = 0;
for (let iter = 4096; iter > 0; iter--) {
  let start = hrtime();
  for (let i = 0; i < 1e4; i++) fn();
  let end = hrtime();
  noop += end - start;
}
noop /= 4096e4;

/**
 * cpu clock frequency in Hz.
 */
export const clk: number = 1e3 / noop;
