export function fibonacci(n: f64): f64 {
  if (n < 2.0) return n;
  else return fibonacci(n - 1.0) + fibonacci(n - 2.0);
}
