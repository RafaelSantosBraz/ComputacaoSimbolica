// use nodejs and install mathjs module to run this code

var math = require('mathjs');
/*
* the example used:
*
* time           (x) ->    1      4       6       12
* temperature   F(x) ->    12     5       1       0
* 
* F(4.39) = ?
*/

// all the values of x
const X = [1, 4, 6, 12];

// all the values of f(x)
const Fx = [12, 5, 1, 0];

// the value of x that you want to find the corresponding f(x)
const value = 1;

// creates a matrix M from the values of X -- aplies the Pn rule for each X's value
const M = (
    () => Array.from({ length: X.length }, (n, i) => Array.from({ length: X.length }, (m, j) => Math.pow(X[i], j)))
)();

// Resolution of the linear system by LU -- calculates the values of a0, a1, ... , an
const A = math.lusolve(M, Fx);

//console.log(A);

// calculates Pn(value)
const fValue = (
    () => A.map((e, i) => i == 0 ? e[0] : e[0] * Math.pow(value, i)).reduce((y, z) => y + z)
)();

console.log(`Pn(${value}) = ${fValue}`);

// generates a GeoGebra-like function for Pn
const func = A.map((e, i) => i == 0 ? e[0] : `+(${e[0]})*(x^${i})`).reduce((y, z) => y + z);

console.log(func);