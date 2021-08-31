let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/*
1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
*/

for(let imprimir of numbers){
    console.log(imprimir);
}

/*
2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
*/
let somaEx2 = 0;
for(let posicao = 0; posicao < numbers.length; posicao++){
    somaEx2 += numbers[posicao];
}
console.log('Soma dos números:',somaEx2);

/*
3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
  -A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
*/

let somaEx3 = 0;
let somaElementosEx3 = 0;
for(let posicao = 0; posicao < numbers.length; posicao++){
    somaEx3 += numbers[posicao];
    somaElementosEx3++;
}
let resultadoEx3 = somaEx3 / somaElementosEx3
console.log('Média aritmética:', resultadoEx3);

/*
4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
*/

let somaEx4 = 0;
let somaElementosEx4 = 0;
for(let posicao = 0; posicao < numbers.length; posicao++){
    somaEx4 += numbers[posicao];
    somaElementosEx3++;
}
let resultadoEx4 = somaEx4 / somaElementosEx4
if(resultadoEx4 > 20){
  console.log('valor maior que 20');
}
else{
  console.log('valor menor ou igual a 20');
}

/*
5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;
*/

let maiorEx5 = numbers[0];
for(let posicao = 0;posicao < numbers.length;posicao++){
  if(numbers[posicao] > maiorEx5){
    maiorEx5 = numbers[posicao]
  }
}
console.log('Maior valor:',maiorEx5);

/*
6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
*/

let contadorImparesEx6 = 0;
for(let posicao = 0;posicao < numbers.length;posicao++){
  if(numbers[posicao] % 2 != 0){
    contadorImparesEx6++;
  }
}
if(contadorImparesEx6 > 0){
  console.log('Quantidade de ímpares',contadorImparesEx6);
}
else{
  console.log('nenhum valor ímpar encontrado');
}

/*
7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let menorEx7 = numbers[0];
for(let posicao = 0;posicao < numbers.length;posicao++){
  if(numbers[posicao] < menorEx7){
    menorEx7 = numbers[posicao]
  }
}
console.log('Menor valor:',menorEx7);

/*
8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
*/
let arrayEx8 = []
for(let posicao = 1;posicao <= 25; posicao++){
  arrayEx8.push(posicao);
}

console.log(arrayEx8);

/*
9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
*/

for(let posicao = 0;posicao < arrayEx8.length;posicao++){
  let divisao = 0;
  divisao = arrayEx8[posicao] / 2;
  console.log(divisao);
}