function iniciarMetodo() {
    let A = [[10, 2, 1], [1, 5, 1], [2, 3, 10]];
    let B = [7, -8, 6];
    let funcs = [
        "(7-2*X[1]-X[2])/10",
        "(-8-X[0]-X[2])/5",
        "(6-2*X[0]-3*X[1])/10"
    ];
    etapaInicial(A, funcs, B, e);
}

function etapaInicial(A, B, funcs, e) {
    let X = new Array(funcs.length);
    for (let i = 0; i < funcs.length; i++) {
        X[i] = B[i] / A[i][i];        
    }
    const result = aplicarAbordagem(A, X, funcs, e);
    console.log(result);
}

function aplicarAbordagem(A, X, funcs, e) {
    let Xk = new Array(X.length);
    
}