/*PARTE 1*/
/*1-Acesse o elemento elementoOndeVoceEsta .*/
console.log(document.getElementById("elementoOndeVoceEsta"));
/*2-Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.*/
document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red";
/*3-Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?*/
document.getElementById("primeiroFilhoDoFilho").innerText = "Trybe!"
/*4-Acesse o primeiroFilho a partir de pai.*/
console.log(document.getElementById("pai").firstElementChild);
/*5-Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.*/
console.log(document.getElementById("elementoOndeVoceEsta").previousElementSibling);
/*6-Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.*/
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling);
/*8-Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.*/
console.log(document.getElementById("elementoOndeVoceEsta").nextSibling.nextSibling);
/*9-Agora acesse o terceiroFilho a partir de pai .*/
console.log(document.getElementById("pai").firstChild.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling);

/*PARTE 2*/
/*1-Crie um irmão para elementoOndeVoceEsta.*/
let irmao = document.createElement("section");
document.getElementById("pai").appendChild(irmao);
/*2-Crie um filho para elementoOndeVoceEsta.*/
let filho = document.createElement("section");
document.getElementById("elementoOndeVoceEsta").appendChild(filho);
/*3-Crie um filho para primeiroFilhoDoFilho.*/
let filhoDoFilho = document.createElement("section");
document.getElementById("primeiroFilhoDoFilho").appendChild(filhoDoFilho);
/*4-A partir desse filho criado, acesse terceiroFilho.*/
filho.id = "filhoDoFilho";
console.log(document.getElementById("filhoDoFilho").parentNode.nextSibling.nextSibling);

/*PARTE 3*/
/*Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho.*/
document.getElementById("pai").removeChild(document.getElementById("primeiroFilho"));
document.getElementById("elementoOndeVoceEsta").removeChild(document.getElementById("segundoEUltimoFilhoDoFilho"));
document.getElementById("pai").removeChild(document.getElementById("terceiroFilho"));
document.getElementById("pai").removeChild(document.getElementById("quartoEUltimoFilho"));
