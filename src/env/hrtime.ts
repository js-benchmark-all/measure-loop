// @ts-nocheck
/**
 * Whether a high resolution timestamp method is detected.
 */
export let hrtimeDetected = true;

/**
 * @returns A high resolution timestamp in milliseconds (when detected).
 * @example
 * ```ts
 * import { hrtime, hrtimeDetected } from 'measure-loop/detect/hrtime';
 * hrtimeDetected || console.warn('no high resolution timestamp method detected!');
 * ```
 */
export let hrtime: () => number;

if (globalThis.performance?.now) {
  // optimized by v8/jsc
  hrtime = performance.now.bind(performance);
} else if (globalThis.$?.agent?.monotonicNow) {
  hrtime = () => $.agent.monotonicNow();
} else {
  hrtime = Date.now;
  hrtimeDetected = false;
}
