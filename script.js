let colorPalette = document.querySelector('#color-palette');
let questionContainer = document.getElementsByClassName('container question');
let textQuestion = document.getElementById('rgb-color');
let arrayColors = [];

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

