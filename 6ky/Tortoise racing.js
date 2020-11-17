function race(v1, v2, g) {
    if(v1 >= v2)
      return null
      let time = g / (v2 - v1)
      let h = Math.trunc(time)
      let m = Math.trunc((time * 60) % 60)
      let s = Math.trunc((time * 3600) % 60)
        return [h, m, s]
    }
    