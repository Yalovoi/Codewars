function divisors(n) {
  let arr = [];
  for(let  i = 2; i < n; i++) {
    if(n % i === 0) {
      arr.push(i);
    }
  }
  return arr.length ? arr : n + ' is prime';
};