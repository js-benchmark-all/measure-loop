// @ts-nocheck
/**
 * Run garbage collection **synchronously** (when detected).
 * @example
 * ```ts
 * import { gc, gcDetected } from 'measure-loop/detect/gc';
 * hrtimeDetected || console.warn('no synchronous GC method detected!');
 * ```
 */
let gcFn: () => void;

/**
 * Whether a synchronous garbage collection method is detected.
 */
export let gcDetected = true;

try {
  Bun.gc(true);
  gcFn = () => Bun.gc(true);
} catch {
  try {
    gc();
    gcFn = gc;
  } catch {
    try {
      __gc();
      gcFn = __gc;
    } catch {
      try {
        std.gc();
        gcFn = () => std.gc();
      } catch {
        gcFn = () => new Uint8Array(2 ** 30);
        gcDetected = false;
      }
    }
  }
}

export { gcFn as gc };
