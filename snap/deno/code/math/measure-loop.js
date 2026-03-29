// @ts-nocheck
(runs, gcs, heaps) => {
  for (
    let iters_remain = 12,
      params_0 = new Array(4096),
      params_1 = new Array(4096),
      params_2 = new Array(4096),
      duration_min = hrtime() + 706200000;
    iters_remain > 0 || hrtime() < duration_min;
    iters_remain--
  ) {
    {
      let hrtime_s = hrtime();
      for (let i = 0; i < 4096; i++) {
        params_0[i] = params[0]();
        params_1[i] = params[1]();
        params_2[i] = params[2]();
      }
      duration_min += hrtime() - hrtime_s;
    }
    gc();
    let hrtime_s = hrtime();
    for (let i = 0; i < 4096; ) {
      fn(params_0[i], params_1[i], params_2[i]);
      i++;
      fn(params_0[i], params_1[i], params_2[i]);
      i++;
      fn(params_0[i], params_1[i], params_2[i]);
      i++;
      fn(params_0[i], params_1[i], params_2[i]);
      i++;
    }
    let hrtime_e = hrtime();
    runs.push((hrtime_e - hrtime_s) / 4096);
  }
};
