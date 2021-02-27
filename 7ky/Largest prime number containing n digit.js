let largest = n => {
  if (typeof n !== "number" || n <= 0) return false;
  for (let i = `${9 + "9".repeat(n - 1)}` * 1; i > 0; i--) {
    if (isPrime(i)) return i;
  }
};
function isPrime(n) {
  let rt = Math.sqrt(n);
  for (let i = 2; i <= rt; i++) {
    if (n % i === 0) return false;
  }
  return n !== 1;
}