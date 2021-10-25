const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');


// 1. Copie esse arquivo e edite apenas ele;
// 1.1. Antes de começar os exercícios, use o LiveServer para dar uma olhada em como está a página no navegador.
// 1.2. Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
// Ocorre por conta dessa edição no css:
/*.tech {
    transform: translateY(-20px);
  }
*/
// 2. Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
let click = document.getElementsByTagName("li")
for(let i = 0; i < click.length;i += 1) {
  click[i].addEventListener("click", click2);
}
function click2(event) {
  for (let i = 0; i < click.length; i += 1) {
    if (click[i].className === "tech") {
      click[i].classList.remove("tech");
    }
  }
  event.target.className = "tech";
}
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
// Adicionando esse FOR na função click2:
/* 
for (let i = 0; i < click.length; i += 1) {
  if (click[i].className === "tech") {
    click[i].classList.remove("tech");
  }
}
*/
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
let input1 = document.getElementById("input");
input1.addEventListener("change", exercicio3);
function exercicio3(event) {
  for (let i = 0; i < click.length; i += 1) {
    if(click[i].className === "tech"){
      click[i].textContent = event.target.value;
    }
  }
}

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
let ex4 = document.getElementById("my-spotrybefy");
ex4.addEventListener("dblclick", doubleClick);
function doubleClick(){
  window.location.href = "https://github.com/lucas-barboza/Trybe";
}
// 4.1. Que tal redirecionar para seu portifólio?
// Adicionei meu repositorio

// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
let ex5 = document.getElementById("my-spotrybefy");
ex5.addEventListener("mouseover", MouseOver);
function MouseOver(event) {
  event.target.style.color = "red";
}

// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.