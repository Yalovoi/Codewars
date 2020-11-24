function minimum(a, x) {
  return Math.min(a % x, x - a % x)
}