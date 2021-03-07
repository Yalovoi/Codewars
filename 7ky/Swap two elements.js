function swapTwo(array, a, b) {
  array = array.slice();
  array[array.indexOf(a)] = b;
  array[array.lastIndexOf(b)] = a;
  return array;
}