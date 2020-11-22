www.codewars.com/kata/57293671c98f77e84b000065/train/javascript
/*
Create a function to return true type of variable, i.e.
type([]) => 'array'
type({}) => 'object'
type('') => 'string'
type(NaN) => 'number'
*/
function type(value) {
  switch({}.toString.call(value)){
    case "[object Number]":
      return 'number';
      case "[object String]":
      return 'string';
      case "[object Boolean]":
      return 'boolean';
      case "[object Array]":
      return 'array';
      case "[object Object]":
      return 'object';
      case "[object Date]":
      return 'date';
      case "[object Null]":
      return 'null';
      default : return 'undefined';
  }
}
