function crap(x, bags, cap){
    let count = 0;
    for (let i = 0; i < x.length; i++) {
         for (let j = 0; j < x[i].length; j++){
           if (x[i][j] === 'D') {
             return 'Dog!!';
           } else if (x[i][j] === '@') {
             count ++;
           }
         }
         }
    return bags >= count ? "Clean" : "Cr@p";
  }