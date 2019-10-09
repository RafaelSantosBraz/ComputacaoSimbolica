var math = require('mathjs');

const m = [[2, 3, -1], [4, 4, -3], [2, -3, 1]];

// Resolução por LU
const x = math.lusolve(m, [5, 3, -1]);

console.log(x);

// obtenção da matriz triangular superior
const ut = math.qr(m);

console.log(ut);