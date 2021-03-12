function multiply(number){
  return number * Math.pow(5, ('' + Math.abs(number)).length);
}