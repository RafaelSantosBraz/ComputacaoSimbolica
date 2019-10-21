"use strict";

function limparResultado() {
    $('#resultado').html("");
}

function iniciarMetodo() {
    const A = eval($('#A').val());
    const B = eval($('#B').val());
    const e = eval($('#e').val());
    const funcs = inferirFuncoes(A, B);
    if (!validarMatrizLinha(A)) {
        if (!validarMatrizColuna(A)) {
            $('#resultado').html("Matriz A não é estritamente diagonal dominante!");
            return;
        }
    }
    etapaInicial(A, B, funcs, e);
}

function validarMatrizLinha(A) {
    for (let i = 0; i < A.length; i++) {
        let soma = 0;
        A[i].forEach((element, j) => {
            if (i != j) {
                soma += Math.abs(element);
            }
        });
        //console.log(Math.abs(linha[i]) + " " + soma);
        if (!(Math.abs(A[i][i]) > soma)) {
            return false;
        }
    }
    return true;
}

function validarMatrizColuna(A) {
    for (let c = 0; c < A.length; c++) {
        let soma = 0;
        A.forEach((linha, i) => {
            if (i != c) {
                soma += Math.abs(linha[c]);
            }
        });
        //console.log(Math.abs(A[c][c]) + " " + soma);
        if (!(Math.abs(A[c][c]) > soma)) {
            return false;
        }
    }
    return true;
}

function inferirFuncoes(A, B) {
    let funcs = new Array(A.length);
    A.forEach((element, index) => {
        funcs[index] = "1/" + element[index] + "*(" + B[index] + geraSubtracao(element, index) + ")";
        // funcs[index] = "(" + B[index] + geraSubtracao(element, index) + ")/" + element[index];
    });
    return funcs;
}

function geraSubtracao(element, index) {
    let res = "";
    element.forEach((i, j) => {
        if (index != j) {
            const mult = ((-1) * i);
            if (mult > 0) {
                res += "+" + mult.toString() + "*X[" + j + "]";
            } else {
                res += mult.toString() + "*X[" + j + "]";
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
    // console.log(X);
    const result = aplicarAbordagem(X, funcs, e);
    $('#resultado').html('[' + result.toString().split(",").join(", ") + ']');
}

function aplicarAbordagem(X, funcs, e) {
    let Xk = new Array(X.length);
    for (let i = 0; i < funcs.length; i++) {
        // console.log(funcs[i]);
        Xk[i] = eval(funcs[i]);
    }
    const ERx = maiorAbs(vetMenosVet(Xk, X)) / maiorAbs(Xk);
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

