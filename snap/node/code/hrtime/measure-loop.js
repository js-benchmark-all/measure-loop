// @ts-nocheck
(runs, gcs, heaps) => {
  for (
    let iters_remain = 12, duration_min = hrtime() + 706200000;
    iters_remain > 0 || hrtime() < duration_min;
    iters_remain--
  ) {
    gc();
    let hrtime_s = hrtime();
    for (let i = 0; i < 1024; i++) {
      fn();
      fn();
      fn();
      fn();
    }
    let hrtime_e = hrtime();
    runs.push((hrtime_e - hrtime_s) / 4096);
  }
};
