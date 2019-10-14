"use strict";

function limparResultado() {
    $('#resultado').html("");
}

function iniciarMetodo() {
    let A = eval($('#A').val());
    let B = eval($('#B').val());
    let e = eval($('#e').val());
    let funcs = inferirFuncoes(A, B);
    console.log(funcs);
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
        else {
            const mult = ((-1) * i);
            if (mult > 0) {
                res += "+" + mult.toString() + "*X[" + j + "] ";
            } else {
                res += mult.toString() + "*X[" + j + "] ";
            }
        }
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
        console.log(funcs[i]);
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

