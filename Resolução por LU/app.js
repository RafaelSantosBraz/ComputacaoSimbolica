var math = require('mathjs')

//const m = [[1, 0, 0, 0], [0, 2, 0, 0], [0, 0, 3, 0], [0, 0, 0, 4]]
const m = [[2, 3, -1], [4, 4, -3], [2, -3, 1]]

const x = math.lusolve(m, [5, 3, -1])

console.log(x);