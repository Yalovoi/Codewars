function remove(s){
  return s.slice(0, s[s.length-1] === "!" ? s.length-1 : s.length);
}
