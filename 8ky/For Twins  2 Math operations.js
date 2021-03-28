function iceBrickVolume(radius, bottleLength, rimLength) {
  let a = bottleLength - rimLength;
  let c = (2 * radius ** 2);
  return a * c ;
}
