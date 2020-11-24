let arrayLeaders = numbers => {
  let arr = [];
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++){
      sum += numbers[j]
    }
    if (numbers[i] > sum) {
      arr.push(numbers[i])
    }
    sum = 0;
  }
  return arr;
}