//código carros
let yCarros = [40, 100, 150, 210, 270, 318];
let xCarros = [600, 550, 570, 600, 550, 570];

//tamanho carros
let comprimentoCarro = [50, 50, 50, 50, 50, 50];
let larguraCarro = [40, 40, 40, 40, 40, 40];

//velocidade dos carros
let velocidades = [2.5,4.5,3,5,3.5,4];

//exibe carro na tela
function mostraCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro[i], larguraCarro[i]);
    }
}

//define velocidade dos carros
function movimentaCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1){
        xCarros[i] -= velocidades[i];
    }
}

//rotorna carro a posicao inicial -- looping
function voltarPosicaoInicialDoCarro(){
    for(let i = 0; i < imagemCarros.length; i = i + 1)
    if(xCarros[i] < -10){
        xCarros[i] = 550
    }
}

