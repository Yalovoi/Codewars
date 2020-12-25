function arrayMadness(a, b) {
  let square = a.reduce((a, b) => a + b**2, 0)
  let cube = b.reduce((a, b) => a + b**3, 0)
  return square > cube
}