function comp(array1, array2){
  if (!array1 || !array2) {
    return false;
  } else {
    array1 = array1.map(a => { return a*a }).sort((a,b) => { return b-a });
    array2 = array2.sort((a,b) => { return b-a });
    for (let i = 0; i < array1.length; i++) {
      if (array2[i] !== array1[i]) {
         return false;
      }
    }
    return true;
  }
}

function comp(array1, array2) {
  array1 = array1.map(v => v * v);
  return array2
    ? array1.reduce((a, b) => a + b, 0) === array2.reduce((a, b) => a + b, 0)
    : false;
}