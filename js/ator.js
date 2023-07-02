//ator
let xAtor = 100;
let yAtor = 385;
let colisao = false;
let larguraAtor = 30;
let comprimentoAtor = 30;

//exibe o ator em tela
function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, larguraAtor, comprimentoAtor);
} 

//movimenta o ator para cima e para baixo
function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
      if (keyIsDown(DOWN_ARROW)){
      yAtor += 3;
    }
    if (keyIsDown(RIGHT_ARROW)){
        xAtor += 3;
    }
    if (keyIsDown(LEFT_ARROW)){
        xAtor -= 3;
    }
}

//verifica colisao ator vs carros
function verificaColisao(){
    for (let i = 0; i < imagemCarros.length; i = i + 1){
        colisao = checkCollisionCircleRectangle(xCarros[i], yCarros[i], comprimentoCarro[i], larguraCarro[i], xAtor, yAtor, larguraAtor);
        if (colisao){
            colidiu();
        }
    }
}

//colisao
function colidiu(){
    somDaColisao.play();
    voltarAtorPosicaoInicial();
    meusPontos = 0;
}

//volta ator posicao inicial
function voltarAtorPosicaoInicial(){
    xAtor = 100;
    yAtor = 366;
}

//verifica limites da tela para o autor
function verificaLimiteAutor(){
    if(xAtor < 0){
        xAtor = 0;
    }
    if(xAtor > 470){
        xAtor = 470;
    }
    if(yAtor < 0){
        yAtor = 0;
    }
    if(yAtor > 385){
        yAtor = 385;
    }
}