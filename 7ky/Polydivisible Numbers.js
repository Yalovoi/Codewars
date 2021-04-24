function polydivisible(x) {
  x = x.toString()
  for (let i = 1;i <= x.length; i++){
    if (x.slice(0,i) % i !==0) return false
  }
  return true
}