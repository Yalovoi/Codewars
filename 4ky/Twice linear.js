/*
Description:
Consider a sequence u where u is defined as follows:
The number u(0) = 1 is the first one in u.
For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
There are no other numbers in u.
Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]
1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, then 7 gives 15 and 22 and so on...
Task:
Given parameter n the function dbl_linear (or dblLinear...) returns the element u(n) of the ordered (with <) sequence u.
Example:
dbl_linear(10) should return 22
Note:
Focus attention on efficiency
*/
function dblLinear(n) {
  // a place to store the sequence
  const sequence = [1]; // start the sequence with 1
  const seen = {};
  // a place to keep track of the length, set to 0
  let length = 0;
  // a place to keep track of current x index, set to 0
  let xIndex = 0;

  // while length is less than n
  while(length < n) {
    const x = sequence[xIndex];
    // calculate y given the current x
    const y = 2 * x + 1;
    // insert y into the sequence in sorted order
    if (!seen[y]) {
      for (var i = sequence.length - 1; i >= 0; i--) {
        if (sequence[i] < y) {
          break;
        }
      }
      sequence.splice(i + 1, 0, y);
      seen[y] = true;
    }
    // calcuate z given the current x
    const z = 3 * x + 1;
    // insert z into the sequence in sorted order
    sequence.push(z);
    seen[z] = true;
    // increase length
    length++;
    // increase x index
    xIndex++;
  }
  // return sequence at n
  return sequence[n];
}


