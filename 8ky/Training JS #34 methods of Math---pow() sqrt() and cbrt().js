function cutCube(volume,n){
return Math.cbrt(volume / n) % 1 === 0 && Math.cbrt(n) % 1 === 0 ? true : false;
  }