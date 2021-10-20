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
/*3-Crie um filho para primeiroFilhoDoFilho.*/
/*4-A partir desse filho criado, acesse terceiroFilho.*/
