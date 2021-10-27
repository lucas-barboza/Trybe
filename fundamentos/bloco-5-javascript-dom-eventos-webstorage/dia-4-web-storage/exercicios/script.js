const main = document.getElementById("main");
const texto = document.getElementsByClassName("text");

const inputBackground = document.createElement("input");
main.appendChild(inputBackground);
inputBackground.id = "inputBackground";
inputBackground.type = "text";
inputBackground.placeholder = "Altera a cor de fundo";
inputBackground.addEventListener("change", background);
let salvarBackground = '';
function background(event){
  let background = event.target.value;
  let body = document.getElementById("body");
  localStorage.setItem("background", background);
  salvarBackground = localStorage.getItem("background");
  body.style.backgroundColor = salvarBackground;
}

const inputColorText = document.createElement("input");
main.appendChild(inputColorText);
inputColorText.id = "inputColorText";
inputColorText.type = "text";
inputColorText.placeholder = "Altera a cor do texto";
inputColorText.addEventListener("change", colorText);
let salvarColorText = '';
function colorText(event){
  let ColorText = event.target.value;
  let text = document.getElementsByClassName("text");
  localStorage.setItem("ColorText", ColorText);
  salvarColorText = localStorage.getItem("ColorText");
  for(let i = 0; i < text.length; i += 1){
    text[i].style.color = salvarColorText;
  }
}

const inputFontSize = document.createElement("input");
main.appendChild(inputFontSize);
inputFontSize.id = "inputFontSize";
inputFontSize.type = "number"
inputFontSize.placeholder = "Altera o tamanho da fonte";
inputFontSize.addEventListener("change", fontSize);
let salvarFontSize = 12;
function fontSize(event){
  let FontSize = event.target.value;
  let section = document.getElementsByClassName("text");
  localStorage.setItem("FontSize", FontSize);
  salvarFontSize = localStorage.getItem("FontSize");
  for(let i = 0; i < section.length; i += 1){
    section[i].style.fontSize = salvarFontSize + "px";
  }
}

const inputEspText = document.createElement("input");
main.appendChild(inputEspText);
inputEspText.id = "inputEspText";
inputEspText.type = "number";
inputEspText.placeholder = "Altera o espaçamento do texto";
inputEspText.addEventListener("change", espText);
let salvarEspText = 0;
function espText(event){
  let EspText = event.target.value; 
  let section = document.getElementsByClassName("text");
  localStorage.setItem("EspText", EspText);
  salvarEspText = localStorage.getItem("EspText");
  for(let i = 0; i < section.length; i += 1){
    section[i].style.wordSpacing = salvarEspText + "px";
  }
}

const inputTipoFonte = document.createElement("input");
main.appendChild(inputTipoFonte);
inputTipoFonte.id = "inputTipoFonte";
inputTipoFonte.type = "text";
inputTipoFonte.placeholder = "Altera a fonte";
inputTipoFonte.addEventListener("change", TipoFonte);
let salvarTipoFonte = '';
function TipoFonte(event){
  let TipoFonte = event.target.value;
  let text = document.getElementsByClassName("text");
  localStorage.setItem("TipoFonte", TipoFonte);
  salvarTipoFonte = localStorage.getItem("TipoFonte");
  for(let i = 0; i < text.length; i += 1){
    text[i].style.fontStyle = salvarTipoFonte;
  }
}

window.onload = function verificaStorage(){
  if(localStorage.getItem("background") !== null){
    salvarBackground = localStorage.getItem("background");
    body.style.backgroundColor = salvarBackground;
  }
  if(localStorage.getItem("ColorText") !== null){
    salvarColorText = localStorage.getItem("ColorText");
    body.style.color = salvarColorText;
  }
  if(localStorage.getItem("FontSize") !== null){
    salvarFontSize = localStorage.getItem("FontSize");
    for(let i of texto){
      i.style.fontSize = salvarFontSize + "px";
    }
  }
  if(localStorage.getItem("EspText") !== null){
    salvarEspText = localStorage.getItem("EspText");
    for(let i of texto){
      i.style.wordSpacing = salvarEspText + "px";
    }
  }
  if(localStorage.getItem("TipoFonte") !== null){
    salvarTipoFonte = localStorage.getItem("TipoFonte");
    for(let i of texto){
      i.style.fontStyle = salvarTipoFonte;
    }
  }
}
