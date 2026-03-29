(runs, gcs, heaps) => {
  for (
    let params_0 = new Array(4096),
      params_1 = new Array(4096),
      params_2 = new Array(4096),
      duration_max = hrtime() + 971096064;
    hrtime() < duration_max;
  ) {
    {
      let hrtime_s = hrtime();
      for (let i = 0; i < 4096; i++) {
        params_0[i] = params[0]();
        params_1[i] = params[1]();
        params_2[i] = params[2]();
      }
      duration_max += hrtime() - hrtime_s - 111;
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
    runs.push((hrtime_e - hrtime_s - 111) / 4096);
  }
};
