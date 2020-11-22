https://www.codewars.com/kata/580777ee2e14accd9f000165/train/javascript
function multiples(s1,s2,s3){
   let arr = [];
  for (let i = 1; i < s3; i++){
    if(i % s1 == 0 && i % s2 == 0)
     arr.push(i);
  }
  return arr;
}
