(a, g, d, f, h, k) => {
  let m = [],
    n = [],
    l = k;
  h += a();
  g();
  for (; k > 0 || a() < h; k--) {
    let b = a();
    for (let i = 0; i < 4096; i++) {
      d();
    }
    let c = a();
    m.push((c - b) / 4096);
  }
  return { runs: m, gcs: n, calls: (l - k) * 4096 };
};
