function prepararMatrix(P) {
    let A = Array.from({ length: 5 }, () => new Array(5).fill(1));
    A.forEach((t, i) => {
        A[i][0] = Math.pow(P[i][0], 2);
        A[i][1] = P[i][0] * P[i][1];
        A[i][2] = Math.pow(P[i][1], 2);
        A[i][3] = P[i][0];
        A[i][4] = P[i][1];
    });    
    return A;
}

function gerarEquacaoOrbita(A) {
    let dp1 = A[0][1] * A[1][2] * A[2][3] * A[3][4];    
    let dp2 = A[0][2] * A[1][3] * A[2][4] * A[4][4];    
}

let P = [
    [8.025, 8.310],
    [10.170, 6.355],
    [11.202, 3.212],
    [10.7736, 0.375],
    [9.092, -2.267]
];

let A = prepararMatrix(P);
console.log(A);
let equacao = gerarEquacaoOrbita(A);
console.log(equacao);

