async function anonymous($fn, $gc, $now, $heap, $params, $counters) {
  let _ = 0;
  let t = 0;
  let samples = new Array(2 ** 20);

  $gc();

  for (; _ < 1000000000; _++) {
    if (_ >= 12 && t >= 642000000) break;

    const t0 = $now();

    for (let o = 0; o < 4096; o++) {
      $fn();
    }

    const t1 = $now();

    const diff = t1 - t0;
    t += t1 - t0;
    samples[_] = diff / 4096;
  }

  samples.length = _;
  samples.sort((a, b) => a - b);
  if (samples.length > 12) samples = samples.slice(2, -2);

  return {
    samples,
    min: samples[0],
    max: samples[samples.length - 1],
    p25: samples[(0.25 * (samples.length - 1)) | 0],
    p50: samples[(0.5 * (samples.length - 1)) | 0],
    p75: samples[(0.75 * (samples.length - 1)) | 0],
    p99: samples[(0.99 * (samples.length - 1)) | 0],
    p999: samples[(0.999 * (samples.length - 1)) | 0],
    avg: samples.reduce((a, v) => a + v, 0) / samples.length,
    ticks: samples.length * 4096,
  };
}
