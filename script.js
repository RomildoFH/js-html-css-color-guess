let colorPalette = document.querySelector('#color-palette');
let questionContainer = document.getElementsByClassName('container question');
let textQuestion = document.getElementById('rgb-color');
let arrayColors = [];
let btnResetGame = document.getElementById('reset-game');

//Criando cores
let colorsQuant = 6;

for (let index = 1; index <= 6; index ++) {
    let colorRandom = 'rgb(' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ')';
    arrayColors.push(colorRandom);
}

//Requisito 2 - Criando texto cor
function creatQuestion () {
    let index = Math.floor((Math.random() * colorsQuant - 1) + 1)
    let corSelecionada = arrayColors[index];
    textQuestion.innerHTML = corSelecionada;
}
creatQuestion ();

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
criarCirculos ()

//Alterando o texto conforme cor é selecionada e testo resposta
function selecionaCor () {    
    colorPalette.addEventListener('click', function (event) {        
        let colorSelected = document.querySelectorAll('.selected');
        for (index = 0; index < colorSelected.length; index ++) {
        colorSelected[index].classList.remove('selected')
        };
        event.target.classList.add('selected');
        if (event.target.style.backgroundColor === textQuestion.innerHTML) {
            document.querySelector('#answer').innerHTML = 'Acertou!';
        } else {
            document.querySelector('#answer').innerHTML = 'Errou! Tente novamente!';
        }        
    });
}
selecionaCor ();

//Criando botão reset game

const refreshPage = () => {
    location.reload();
  }
  
  btnResetGame.addEventListener('click', refreshPage)


