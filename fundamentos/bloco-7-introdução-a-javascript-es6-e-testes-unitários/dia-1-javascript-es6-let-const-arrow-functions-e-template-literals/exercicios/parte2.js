//1-Crie uma função que receba um número e retorne seu fatorial.
const fatorial = numero => {
  let resultado = numero;
  if(numero === 0 || numero === 1) {
    return 1;
  } else{
    for(let i = 1; i < numero; i += 1) {
      resultado *= i;
    }
    return resultado;
  }
}
console.log(fatorial(5));

//2-Crie uma função que receba uma frase e retorne qual a maior palavra.
const palavra = entrada => {
  let vetor = entrada.split(" ");
  let palavra = vetor[0];
  for(let i = 0; i < vetor.length; i += 1){
    if(vetor[i].length > palavra.length){
      palavra = vetor[i];
    }
  }
  return palavra;
}
console.log(palavra('A entrada é muito grande'));
//3-Crie uma página que contenha:
//- Um botão ao qual será associado um event listener ;
//- Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
//- Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
let botao = document.getElementById("botao");
let cliques = document.getElementById("cliques");
let contador = 0;
function contadora(){
  contador += 1;
  cliques.innerText = `Você apertou o botão ${contador} vezes`;
}
botao.addEventListener("click", contadora);

//4-Crie um código JavaScript com a seguinte especificação:
//Não se esqueça de usar template literals
//-Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
//Exemplo:
//String determinada: "Tryber x aqui!"
//Parâmetro: "Bebeto"
//Retorno: "Tryber Bebeto aqui!"
//Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
function mudarFrase(nome){
  let frase = "Tryber x aqui!"
  let vetor = frase.split(" ");
  for(let i = 0; i < vetor.length; i += 1) {
    if(vetor[i] === 'x'){
      vetor[i] = nome;
    }
  }
  return vetor.join(" ");
}
//Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
const habilidade = ['HTML', 'CSS', 'JavaScript', 'ES6', 'React'];
//Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
//Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
//JavaScript;
//HTML; ... #goTrybe".
function skills(mudarFrase){
  let ordem = habilidade.sort();
  console.log(`${mudarFrase} Minhas cinco principais hablidades são: ${ordem.join(", ")} #goTrybe`);
}
skills(mudarFrase('Lucas'))