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
  // @ts-ignore
  Bun.gc(true);
  // @ts-ignore
  gcFn = () => Bun.gc(true);
} catch {
  try {
    // @ts-ignore
    gc();
    // @ts-ignore
    gcFn = gc;
  } catch {
    try {
      // @ts-ignore
      __gc();
      // @ts-ignore
      gcFn = __gc;
    } catch {
      try {
        // @ts-ignore
        std.gc();
        // @ts-ignore
        gcFn = () => std.gc();
      } catch {
        try {
          // @ts-ignore
          $262.gc();
          // @ts-ignore
          gcFn = () => $262.gc();
        } catch {
          try {
            // @ts-ignore
            tjs.engine.gc.run();
            // @ts-ignore
            gcFn = () => tjs.engine.gc.run();
          } catch {
            // @ts-ignore
            if (globalThis.Graal) gcFn = () => new Uint8Array(2 ** 29);
            else gcFn = () => new Uint8Array(2 ** 30);

            gcDetected = false;
          }
        }
      }
    }
  }
}

export { gcFn as gc };
