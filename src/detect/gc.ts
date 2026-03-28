/**
 * Auto-detected method to run garbage collection **synchronously**.
 */
export let gc: () => void;

/**
 * Whether a synchronous garbage collection method is detected.
 */
export let detected = true;

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
            else {
              gc = () => new Uint8Array(2 ** 30);
              detected = false;
            }
          }
        }
      }
    }
  }
}

export default gc;
