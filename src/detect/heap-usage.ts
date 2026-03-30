/**
 * Try to detect a method to get current heap usage.
 */
export const detectHeapUsage = async (): Promise<void | (() => number)> => {
  // @ts-ignore
  if (globalThis.Bun) {
    // @ts-ignore
    const { memoryUsage } = await import('bun:jsc');
    return () => memoryUsage().current;
  }

  try {
    // @ts-ignore
    const { getHeapStatistics } = await import('node:v8');
    getHeapStatistics();
    return () => {
      var m = getHeapStatistics();
      return m.used_heap_size + m.malloced_memory;
    };
  } catch {}
};
