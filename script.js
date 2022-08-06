let colorPalette = document.getElementsByClassName('color-palette');
let questionContainer = document.getElementsByClassName('container question');
let textQuestion = document.getElementById('rgb-color');
let arrayColors = [];

//Criando cores
let colorsQuant = 6;

for (let index = 1; index <= 6; index ++) {
    let colorRandom = 'rbg (' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ', ' + Math.floor((Math.random() * 255) + 1) + ')';
    arrayColors.push(colorRandom);
}

//Requisito 2 - Criando texto cor
function creatQuestion () {
    let index = Math.floor((Math.random() * 6) + 1)
    let corSelecionada = arrayColors[index]
    textQuestion.innerHTML = corSelecionada;
}
creatQuestion ();

