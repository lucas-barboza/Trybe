function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function CriandoOsDiasDoMes() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let IDdias = document.getElementById("days");
  for (let i = 0; i < dezDaysList.length; i += 1) {
    let dias = document.createElement("li");
    dias.innerHTML = dezDaysList[i];
    IDdias.appendChild(dias);
    let dia = dezDaysList[i];
    CriaAsClasses(dia,dias);
  }
}

function CriaAsClasses(dia,dias) {
  if(dia === 25) {
    dias.className = "day holiday friday";
  }
  else if(dia === 24 || dia === 31) {
    dias.className = "day holiday";
  }
  else if(dia === 4 || dia === 11 || dia === 18) {
    dias.className = "day friday";
  }else {
  dias.className = "day";
  }
}

CriandoOsDiasDoMes();

function feriados(){
  let butao = document.createElement("button");
  let filho = document.querySelector(".buttons-container");
  butao.id = "btn-holiday";
  butao.innerText = "Feriados"
  butao.addEventListener("click", mudaDeCor);
  filho.appendChild(butao);
}

feriados();

let feriados1 = document.querySelectorAll(".holiday");
let onOff = false;
function mudaDeCor(){
  if(onOff){
    desligado(feriados1);
  }else{
    ligado(feriados1);
  }
}

function ligado(feriados1) {
  for(let i = 0; i < feriados1.length; i +=1) {
    feriados1[i].style.backgroundColor = "rgb(184, 255, 220)";
  }
  onOff = true;
}

function desligado(feriados1) {
  for(let i = 0; i < feriados1.length; i +=1) {
    feriados1[i].style.backgroundColor = "rgb(238,238,238)";
  }
  onOff = false;
}

function sextaFeira() {
  let butao = document.createElement("button");
  let pai = document.querySelector(".buttons-container");
  butao.id = "btn-friday";
  butao.innerText = "Sexta-feira";
  pai.appendChild(butao);
  butao.addEventListener("click", mudaTexto);
}

sextaFeira();

let sextou = document.querySelectorAll(".friday");
let salvaSexta = [sextou[0].innerHTML,sextou[1].innerHTML,sextou[2].innerHTML,sextou[3].innerHTML]
function mudaTexto(){
  if(onOff){
    sextaDesligada(sextou);
  }else{
    sextaLigada(sextou);
  }
}

function sextaLigada(sextou){
  for(let i = 0; i < sextou.length; i += 1){
    sextou[i].innerText = "Sextou";
  }
  onOff = true;
}

function sextaDesligada(sextou){
  for(let i = 0; i < sextou.length; i += 1){
    sextou[i].innerText = salvaSexta[i];
  }
  onOff = false;
}

let todosOsDias = document.querySelectorAll(".day")
function zoom(){
  for(let i of todosOsDias){
    i.addEventListener("mouseover", zoom2);
    i.addEventListener("mouseleave", zoom3);
  }
}
zoom();

function zoom2(event){
  event.target.style.fontSize = "30px";
}

function zoom3(event){
  event.target.style.fontSize = "20px";
}

function tarefa(){
  let span = document.createElement("span");
  let novo = document.createElement("label");
  let pai = document.querySelector(".my-tasks");
  pai.appendChild(span);
  pai.appendChild(novo);
  span.innerText = "Projetos:"
  legendaTarefa();
}

tarefa();

function legendaTarefa(){
  let legenda = document.createElement("div");
  let pai = document.querySelector(".my-tasks");
  pai.appendChild(legenda);
  legenda.className = "task";
  legenda.style.backgroundColor = "pink";
}

let evento = document.querySelector(".task");
evento.addEventListener("click", eventoTarefa);
let onOffTarefa = false;
function eventoTarefa(event){
  if(onOffTarefa === false){
    event.target.className = "task selected";
    onOffTarefa = true;
  }else{
    event.target.className = "task";
    onOffTarefa = false;
  }
}

let exdez = document.getElementById("days");
exdez.addEventListener("click", corEx10);
function corEx10(event){
  if(onOffTarefa === true){
    event.target.style.color = "pink";
  }else{
    event.target.style.color = "rgb(119,119,119)";
  }
}