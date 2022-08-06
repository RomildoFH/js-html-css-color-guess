let colorPalette = document.querySelector('#color-palette');
let questionContainer = document.getElementsByClassName('container question');
let textQuestion = document.getElementById('rgb-color');
let arrayColors = [];
let btnResetGame = document.getElementById('reset-game');
let colorsQuant = 6;
let score = document.getElementById('score');
let acertos = 0;
let wrong = document.getElementById('wrong');
let erros = 0;

//Requisito 1 - Adicione no seu site um título com o nome do seu jogo
//Realizado através do html

//Criando cores
function criandoCores () {
    for (let index = 1; index <= colorsQuant; index ++) {
        let colorRandom = 'rgb(' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ')';
        arrayColors.push(colorRandom);
    }
}

//Requisito 2 - Criando texto cor
function creatQuestion () {
    let index = Math.floor((Math.random() * colorsQuant - 1) + 1)
    let corSelecionada = arrayColors[index];
    textQuestion.innerHTML = corSelecionada;
}
// creatQuestion ();

//Requisito 3 - Adicione à página opções de cores para serem adivinhadas
function criarCirculos () {
    for (let index = 0; index < arrayColors.length; index ++) {
        let circulos = document.createElement('div');
        circulos.classList.add('ball');
        colorPalette.appendChild(circulos);     
    }
   for (let index = 0; index < arrayColors.length; index ++) {
        let circulos = document.getElementsByClassName('ball');
        let circulo = circulos[index];
        circulo.style.backgroundColor = arrayColors[index];
   }
}
// criarCirculos ();

//4 - Adicione cores aos círculos, que devem ser geradas dinamicamente
//5 - Ao clicar em um círculo colorido, deve ser mostrado um texto indicando se está correto
function selecionaCor () {    
    colorPalette.addEventListener('click', function (event) {
        let colorSelected = document.querySelectorAll('.selected');
        for (index = 0; index < colorSelected.length; index ++) {
        colorSelected[index].classList.remove('selected')
        };
        event.target.classList.add('selected');
        if (event.target.style.backgroundColor === textQuestion.innerHTML) {
            document.querySelector('#answer').innerHTML = 'Acertou!';
            acertos += 3;
            score.innerHTML = acertos;
        } else {
            document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
            erros -= 3;
            wrong.innerHTML = erros;
        }        
    });
}
selecionaCor ();

//Requisito 6 - Crie um botão para iniciar/reiniciar o jogo

function gerandoNovasCores () {
    for (let index = 0; index < arrayColors.length; index ++) {
        let colorRandom = 'rgb(' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ')';
        arrayColors[index] = colorRandom;
    }
    //Gerando novo rgb-color
    let index = Math.floor((Math.random() * colorsQuant - 1) + 1)
    let corSelecionada = arrayColors[index];
    textQuestion.innerHTML = corSelecionada;
    //Gerando novos circulos backgroundColors
    for (let index = 0; index < arrayColors.length; index ++) {
        let circulos = document.getElementsByClassName('ball');
        let circulo = circulos[index];
        circulo.style.backgroundColor = arrayColors[index];
    }
    document.querySelector('#answer').innerHTML = 'Escolha uma cor';
}
btnResetGame.addEventListener('click', gerandoNovasCores);


window.onload = function () {
    criandoCores ();
    creatQuestion ();
    criarCirculos ();
}