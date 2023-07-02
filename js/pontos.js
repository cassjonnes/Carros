let meusPontos = 0;

function incluiPontos(){
    textAlign(CENTER);
    textSize(25);
    fill(color(255,140,0));
    text('Pontos: ' + meusPontos, width/5, 27);
}

function incluiPonto(){
    if (yAtor < 10){
        somDoPonto.play();
        voltarAtorPosicaoInicial();
        meusPontos += 1;
    }
}