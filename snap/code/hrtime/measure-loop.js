(runs, gcs, heaps) => {
  for (let duration_max = hrtime() + 2050916352; hrtime() < duration_max; ) {
    gc();
    let hrtime_s = hrtime();
    for (let i = 0; i < 1024; i++) {
      fn();
      fn();
      fn();
      fn();
    }
    let hrtime_e = hrtime();
    runs.push((hrtime_e - hrtime_s - 259) / 4096);
  }
};
