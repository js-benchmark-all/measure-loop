// @ts-nocheck
/**
 * @returns A high resolution timestamp in nanosecond (when detected).
 * @example
 * ```ts
 * import { hrtime, hrtimeDetected } from 'measure-loop/detect/hrtime';
 * hrtimeDetected || console.warn('no high resolution timestamp method detected!');
 * ```
 */
export let hrtime: () => number;

/**
 * Whether a high resolution timestamp method is detected.
 */
export let hrtimeDetected = true;

try {
  // bun
  Bun.nanoseconds();
  hrtime = Bun.nanoseconds;
} catch {
  try {
    // jsc
    $.agent.monotonicNow();
    hrtime = () => 1e6 * $.agent.monotonicNow();
  } catch {
    try {
      // node/deno/... (v8 inline, anti-deopts)
      const fn = performance.now.bind(performance);
      fn();

      hrtime = () => 1e6 * fn();
    } catch {
      hrtime = () => 1e6 * Date.now();
      hrtimeDetected = false;
    }
  }
}
