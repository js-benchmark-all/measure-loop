(a, g, d, f, h, k) => {
  let m = new Array(1048576),
    n,
    l = 0,
    t = a();
  g();
  for (; (l < 1048576 && l < k) || t < h; l++) {
    let b = a();
    for (let i = 0; i < 4096; i++) {
      d();
    }
    let c = a();
    t += c - b;
    m[l] = (c - b) / 4096;
  }
  m.length = l;
  return { runs: m, gcs: n, calls: l * 4096, iters: l };
};
