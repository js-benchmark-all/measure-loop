(a, g, d, f, l) => {
  let m = new Array(l),
    n;
  g();
  for (let i = 0; i < l; i++) {
    let b = a();
    for (let i = 0; i < 4096; i++) {
      d();
    }
    let c = a();
    m[i] = (c - b) / 4096;
  }
  return { runs: m, gcs: n, calls: l * 4096, iters: l };
};
