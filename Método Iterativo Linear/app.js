function limparResultado() {
    $('#resultado').html("");
}

function iniciarBisseccao() {
    $('#resultado').html("");
    equacaofx = $('#fx').val();
    equacaogx = $('#gx').val();    
    x0 = eval($('#x0').val());
    e = eval($('#e').val());
    aplicarAbordagem(equacaofx, equacaogx, x0, e);
}


function aplicarAbordagem(equacaofx, equacaogx, x0, e) {
    x = x0;
    fx = eval(equacaofx);
    if (Math.abs(fx) <= e){
        adicionarLinha(x, fx);    
    } else{      
        gx = eval(equacaogx);
        adicionarLinha(x, fx);   
        aplicarAbordagem(equacaofx, equacaogx, gx, e);
    }
}

function adicionarLinha(x, fx) {
    $('#resultado').append("x: " + x + "<br>f(x): " + fx + "<br><br>");
}