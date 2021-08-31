/*
1.Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)
*/

const a = 6;
const b = 23;

let adicao = a + b;

let subtracao = a - b;

let multiplicacao = a * b;

let divisao = a / b;

let modulo = a % b;

/*
2.Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
*/
const x = 3, y = 5;
let numeroMaior;

if(x > y){
    numeroMaior = a;
}
else if (y < x){
    numeroMaior = b;
}
else{
    numeroMaior = "Os números são iguais"
}

/*
3.Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
*/

const c = 3, d = 5, e = 4;
let maiorNumero;

if (c > d && c > e){
    maiorNumero = c;
}
else if(d > c && d > e){
    maiorNumero = d;
}
else if(e > c && e > d){
    maiorNumero = e;
}
else{
    numeroMaior = "Existe números iguais"
}

/*
4.Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
*/

const numero = -2;

if(numero > 0){
    console.log("positive");
}
else if(numero < 0){
    console.log("negative");
}
else{
    console.log("zero");
}

/*
5.Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.
*/

const ladoA = 60, ladoB = 60, ladoC = 60;

if(ladoA + ladoB + ladoC < 0){
    console.log("Triangulo inválido")
}
else if(ladoA + ladoB + ladoC == 180){
    console.log(true);
}
else if(ladoA + ladoB + ladoC != 180){
    console.log(false);
}

/*
6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)
*/

let pecaXadrez = 'Cavalo';
toLowerCase(pecaXadrez);

if(pecaXadrez == 'rei'){
    console.log("O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.");
}
else if(pecaXadrez == 'rainha'){
    console.log("A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.");
}
else if(pecaXadrez == 'bispo'){
    console.log("O bispo move-se ao longo da diagonal. Não pode pular outras peças.");
}
else if(pecaXadrez == 'cavalo'){
    console.log("É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.");
}
else if(pecaXadrez == 'torre'){
    console.log("A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.");
}
else if(pecaXadrez == 'peao'){
    console.log("O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.");
}
else{
    console.log("Peça inválida.")
}

/*
7.Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
 -Porcentagem >= 90 -> A
 -Porcentagem >= 80 -> B
 -Porcentagem >= 70 -> C
 -Porcentagem >= 60 -> D
 -Porcentagem >= 50 -> E
 -Porcentagem < 50 -> F
 -O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
*/

let nota = 74;

if(nota >= 90 && nota <= 100){
    console.log("A");
}
else if(nota >= 80){
    console.log("B");
}
else if(nota >= 70){
    console.log("C");
}
else if(nota >= 60){
    console.log("D");
}
else if(nota >= 50){
    console.log("E");
}
else if(nota < 50 && nota > 0){
    console.log("F");
}
else{
    console.log("Nota inválida");
}

/*
8.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const f = 1, g = 2, h = 3;

if(f % 2 == 0 || g % 2 == 0 || h % 2 == 0){
    console.log(true);
}
else{
    console.log(false);
}

/*
9.Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
Bonus: use somente um if .
*/

const i = 1, j = 2, k = 3;

if(f % 2 != 0 || g % 2 != 0 || h % 2 != 0){
    console.log(true);
}
else{
    console.log(false);
}

/*
10.Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
Atente que, sobre o custo do produto, incide um imposto de 20%.
Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
valorCustoTotal = valorCusto + impostoSobreOCusto
lucro = valorVenda - valorCustoTotal (lucro de um produto)
*/

const valorCusto = 2, valorVenda = 8;

if (valorCusto < 0 || valorVenda < 0){
    console.log("Valor(es) nagativo(s).");
    break;
}

let valorCustoTotal, lucro;

valorCustoTotal = valorCusto * 1.2;
lucro = valorVenda - valorCustoTotal;

/*
11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
 -A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
    -INSS (Instituto Nacional do Seguro Social)
        -Salário bruto até R$ 1.556,94: alíquota de 8%
        -Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
        -Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
        -Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    -IR (Imposto de Renda)
        -Até R$ 1.903,98: isento de imposto de renda
        -De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
        -De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
        -De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
        -Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
    -O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
    -Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
    -Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
        -R$ 2.670,00: salário com INSS já deduzido;
        -7.5%: alíquota de imposto de renda;
        -R$ 142,80 parcela a se deduzir do imposto.
    -Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
    -O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.
*/

let salarioBruto = 1600.0;

/* INSS */

let descontoINSS;

if(salarioBruto > 5189.82){
    descontoINSS = 570.88
}
else if(salarioBruto >= 2594.93){
    descontoINSS = salarioBruto * 0.11
}
else if(salarioBruto >= 1556.95){
    descontoINSS = salarioBruto * 0.09;
}
else if(salarioBruto <= 1556.94){
    descontoINSS = salarioBruto * 0.08;
}

let salarioBase = salarioBruto - descontoINSS;

/* IR */

let IR;

if(salarioBase > 4664.68){
    IR = (salarioBase * 0.27) - 869.36;
}
else if(salarioBase >= 3751.06){
    IR = (salarioBase * 0.225) - 636.13;
}
else if(salarioBase >= 2826.66){
    IR = (salarioBase * 0.15) - 354.80;
}
else if(salarioBase >= 1903.99){
    IR = (salarioBase * 0.075) - 142.80;
}
else if(salarioBase <= 1903.98){
    IR = 0;
}

let salarioRecebido = salarioBase - IR;

console.log(salarioRecebido)