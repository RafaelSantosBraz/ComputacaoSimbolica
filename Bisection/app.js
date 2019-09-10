function limparResultado() {
    $('#resultado').html("");
}

function iniciarBisseccao() {
    $('#resultado').html("");
    equacao = $('#equacao').val();
    a = eval($('#a').val());
    b = eval($('#b').val());
    e = eval($('#e').val());
    aplicarAbordagem(equacao, a, b, e);
}

function iniciarBisseccaoIterativa() {
    $('#resultado').html("");
    equacao = $('#equacao').val();
    a = eval($('#a').val());
    b = eval($('#b').val());
    e = eval($('#e').val());
    aplicarAbordagemIterativa(equacao, a, b, e);
}

function aplicarAbordagem(equacao, a, b, e) {
    x = a;
    fa = eval(equacao);
    x = b;
    fb = eval(equacao);
    if (fa * fb < 0) {
        xm = (a + b) / 2;
        x = xm;
        fxm = eval(equacao);
        adicionarLinha(a, b, fa, fb, xm, fxm);
        if (!(Math.abs(fxm) <= e)) {
            if (fxm < 0 && fa < 0) {
                a = xm;
            }
            if (fxm < 0 && fb < 0) {
                b = xm;
            }
            if (fxm > 0 && fa > 0) {
                a = xm;
            }
            if (fxm > 0 && fb > 0) {
                b = xm;
            }
            aplicarAbordagem(equacao, a, b, e);
        }
    } else {
        $('#resultado').html("Não tem 0 da função no intervalo especificado.");
    }
}

function aplicarAbordagemIterativa(equacao, a, b, e) {
    do {
        x = a;
        fa = eval(equacao);
        x = b;
        fb = eval(equacao);
        if (fa * fb < 0) {
            xm = (a + b) / 2;
            x = xm;
            fxm = eval(equacao);
            adicionarLinha(a, b, fa, fb, xm, fxm);
            if (fxm < 0 && fa < 0) {
                a = xm;
            }
            if (fxm < 0 && fb < 0) {
                b = xm;
            }
            if (fxm > 0 && fa > 0) {
                a = xm;
            }
            if (fxm > 0 && fb > 0) {
                b = xm;
            }
        }else {
            $('#resultado').html("Não tem 0 da função no intervalo especificado.");
            break;
        }
    } while (!(Math.abs(fxm) <= e));
}

function adicionarLinha(a, b, fa, fb, xm, fxm) {
    $('#resultado').append("a: " + a + "<br>f(a): " + fa + "<br>b: " + b + "<br>f(b): " + fb + "<br>xm: " + xm + "<br>f(xm):" + fxm + "<br><br>");
}