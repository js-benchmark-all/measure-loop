/**
 * Run garbage collection **synchronously** (when detected).
 * @example
 * ```ts
 * import { gc, gcDetected } from 'measure-loop/detect/gc';
 * hrtimeDetected || console.warn('no synchronous GC method detected!');
 * ```
 */
export let gc: () => void;

/**
 * Whether a synchronous garbage collection method is detected.
 */
export let gcDetected = true;

try {
  // @ts-ignore
  Bun.gc(true);
  // @ts-ignore
  gc = () => Bun.gc(true);
} catch {
  try {
    // @ts-ignore
    globalThis.gc();
    // @ts-ignore
    gc = () => globalThis.gc();
  } catch {
    try {
      // @ts-ignore
      globalThis.__gc();
      // @ts-ignore
      gc = () => globalThis.__gc();
    } catch {
      try {
        // @ts-ignore
        globalThis.std.gc();
        // @ts-ignore
        gc = () => globalThis.std.gc();
      } catch {
        try {
          // @ts-ignore
          globalThis.$262.gc();
          // @ts-ignore
          gc = () => globalThis.$262.gc();
        } catch {
          try {
            // @ts-ignore
            globalThis.tjs.engine.gc.run();
            // @ts-ignore
            gc = () => globalThis.tjs.engine.gc.run();
          } catch {
            // @ts-ignore
            if (globalThis.Graal) gc = () => new Uint8Array(2 ** 29);
            else gc = () => new Uint8Array(2 ** 30);

            gcDetected = false;
          }
        }
      }
    }
  }
}

export default gc;
