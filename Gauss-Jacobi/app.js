"use strict";

function iniciarMetodo() {
    let A = [[10, 2, 1], [1, 5, 1], [2, 3, 10]];
    let B = [7, -8, 6];    
    let e = 0.05;
    let funcs = inferirFuncoes(A, B);
    etapaInicial(A, B, funcs, e);
}


function inferirFuncoes(A, B) {
    let funcs = new Array(A.length);
    A.forEach((element, index) => {
        funcs[index] = "1/" + element[index] + "*(" + B[index] + geraSubtracao(element, index) + ")";
    });
    return funcs;
}

function geraSubtracao(element, index) {
    let res = "";
    element.forEach((i, j) => {
        if (index == j);
        else
            res += ((-1) * i).toString() + "*X[" + j + "] ";
    });
    return res;
}

function etapaInicial(A, B, funcs, e) {
    let X = new Array(funcs.length);
    for (let i = 0; i < funcs.length; i++) {
        X[i] = B[i] / A[i][i];
    }
    const result = aplicarAbordagem(X, funcs, e);
    $('#resultado').html(result.toString().split(",").join(", "));
}

function aplicarAbordagem(X, funcs, e) {
    let Xk = new Array(X.length);
    for (let i = 0; i < funcs.length; i++) {
        Xk[i] = eval(funcs[i]);
    }
    const XkX = vetMenosVet(Xk, X);
    const ERx = maiorAbs(XkX) / maiorAbs(X);
    if (ERx <= e) {
        return Xk;
    }
    return aplicarAbordagem(Xk, funcs, e);
}

function vetMenosVet(X, Y) {
    let res = new Array(X.length);
    for (let i = 0; i < X.length; i++) {
        res[i] = Math.abs(Math.abs(X[i]) - Math.abs(Y[i]));
    }
    return res;
}

function maiorAbs(vec) {
    let aux = -Infinity;
    // console.log(vec);
    vec.forEach(i => {
        if (Math.abs(i) > aux) {
            aux = i;
        }
    });
    return aux;
}

