https://www.codewars.com/kata/57293671c98f77e84b000065/train/javascript
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
