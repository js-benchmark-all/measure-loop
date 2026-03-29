async function anonymous($fn, $gc, $now, $heap, $params, $counters) {
  let _ = 0;
  let t = 0;
  let samples = new Array(2 ** 20);

  const gc = { total: 0, min: Infinity, max: -Infinity };

  let param_0_0 = new Array(4096);
  let param_1_0 = new Array(4096);
  let param_2_0 = new Array(4096);

  $gc();

  for (; _ < 1000000000; _++) {
    if (_ >= 12 && t >= 1284000000) break;

    for (let o = 0; o < 4096; o++) {
      if ((param_0_0[o] = $params[0]()) instanceof Promise) param_0_0[o] = await param_0_0[o];
      if ((param_1_0[o] = $params[1]()) instanceof Promise) param_1_0[o] = await param_1_0[o];
      if ((param_2_0[o] = $params[2]()) instanceof Promise) param_2_0[o] = await param_2_0[o];
    }

    igc: {
      const t0 = $now();
      $gc();
      t += $now() - t0;
    }

    const t0 = $now();

    for (let o = 0; o < 1024; o++) {
      const param_offset = o * 4;

      $fn(param_0_0[param_offset], param_1_0[param_offset], param_2_0[param_offset]);
      $fn(param_0_0[1 + param_offset], param_1_0[1 + param_offset], param_2_0[1 + param_offset]);
      $fn(param_0_0[2 + param_offset], param_1_0[2 + param_offset], param_2_0[2 + param_offset]);
      $fn(param_0_0[3 + param_offset], param_1_0[3 + param_offset], param_2_0[3 + param_offset]);
    }

    const t1 = $now();

    igc: {
      const t0 = $now();
      $gc();
      const t1 = $now() - t0;

      t += t1;
      gc.total += t1;
      gc.min = Math.min(t1, gc.min);
      gc.max = Math.max(t1, gc.max);
    }

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

    gc: { ...gc, avg: gc.total / _ },
  };
}
