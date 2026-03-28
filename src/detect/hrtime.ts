/**
 * Auto-detected method to return a high resolution timestamp in nanosecond.
 */
export let hrtime: () => number;

/**
 * Whether a high resolution timestamp method is detected.
 */
export let detected = true;

try {
  // bun
  // @ts-ignore
  Bun.nanoseconds();
  // @ts-ignore
  hrtime = Bun.nanoseconds;
} catch {
  try {
    // jsc
    // @ts-ignore
    $.agent.monotonicNow();
    // @ts-ignore
    hrtime = () => 1e6 * $.agent.monotonicNow();
  } catch {
    try {
      // 262 agent
      // @ts-ignore
      $262.agent.monotonicNow();
      // @ts-ignore
      hrtime = () => 1e6 * $262.agent.monotonicNow();
    } catch {
      try {
        // node/deno/... (v8 inline, anti-deopts)
        const fn = performance.now.bind(performance);
        fn();

        hrtime = () => 1e6 * fn();
      } catch {
        hrtime = () => 1e6 * Date.now();
        detected = false;
      }
    }
  }
}
