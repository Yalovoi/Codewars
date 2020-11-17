function cleanString(s) {
    let arr = []
    for (let el of s) {
      if (el === "#") {
        arr.pop()
      } else {
        arr.push(el)
      }
    }
    return arr.join("")
  }