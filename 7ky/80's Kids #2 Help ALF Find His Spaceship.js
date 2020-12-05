//https://www.codewars.com/kata/5660aa3d5e011dfd6e000063/train/javascript
const findSpaceship = (map = '') => {
  if (!map.includes('X')) return 'Spaceship lost forever.'

  const spaces = map
    .trim()
    .split(/\n/)
    .reverse()

  const y = spaces.findIndex(space => space.includes('X'))
  const x = spaces[y].indexOf('X')

  return [x, y]
}