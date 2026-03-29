(runs, gcs, heaps) => {
  var hrtime_noop;
  {
    let s = hrtime(),
      e = hrtime();
    hrtime_noop = e - s;
  }
  for (let iter = 0, duration_max = hrtime() + 1000000000; iter < 1000000; iter++) {
    if (hrtime() > duration_max) break;
    let params_0 = params[0](),
      params_1 = params[1](),
      params_2 = params[2]();
    gc();
    let hrtime_s = hrtime();
    for (let i = 0; i < 1024; i++) {
      fn(params_0, params_1, params_2);
      fn(params_0, params_1, params_2);
      fn(params_0, params_1, params_2);
      fn(params_0, params_1, params_2);
    }
    let hrtime_e = hrtime();
    runs.push((hrtime_e - hrtime_s - hrtime_noop) / 4096);
  }
};
