//https://www.codewars.com/kata/57fae964d80daa229d000126/train/javascript
function remove(s){
  return s.slice(0, s[s.length-1] === "!" ? s.length-1 : s.length);
}
