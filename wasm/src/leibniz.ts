function leibnizPow(i: i64): f64 {
  return Math.pow(-1, i) / (2 * i + 1);
}

export function leibniz(n: i64): f64 {
  let r: f64 = .0;
  for (let i: i64; i < n; i++) {
    r += leibnizPow(i);
  }
  return 4.0 * r;
}

