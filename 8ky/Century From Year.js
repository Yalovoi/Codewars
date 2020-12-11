function century(year) {
 return Math.floor(year/100) + (year % 100 === 0 ? 0 : 1);
}