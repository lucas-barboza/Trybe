/*
1.Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
Exemplo de palíndromo: arara .
verificaPalindrome('arara') ;
Retorno esperado: true
verificaPalindrome('desenvolvimento') ;
Retorno esperado: false
*/

let palavraEx1 = 'arara'

function verificaPalindrome(palavraEx1){
    let palindromoEx1 = "";
    for(let posicaoEx1 = palavraEx1.length - 1; posicaoEx1 >= 0; posicaoEx1--){
        palindromoEx1 += palavraEx1[posicaoEx1];
    }
    if(palavraEx1 == palindromoEx1){
        return true;
    }
    else{
        return false;
    }
}
console.log(verificaPalindrome(palavraEx1));

/*
2.Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 .
*/

let inteirosEx2 = [2, 4, 6, 7, 10, 0, -3];

function indiceMaiorInteiro (inteirosEx2){
    let maiorIndiceEx2 = inteirosEx2[0];
    for(let keyInteirosEx2 in inteirosEx2){
        if(inteirosEx2[keyInteirosEx2] > maiorIndiceEx2){
            maiorIndiceEx2 = keyInteirosEx2;
        }
    }
    return maiorIndiceEx2;
} 

console.log(indiceMaiorInteiro(inteirosEx2));

/*
3.Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .
*/

let inteirosEx3 = [2, 4, 6, 7, 10, 0, -3];

function indiceMenorInteiro(inteirosEx3){
    let menorIndiceEx3 = inteirosEx3[0];
    for(let keyInteirosEx3 in inteirosEx3){
        if(inteirosEx3[keyInteirosEx3] < menorIndiceEx3){
            menorIndiceEx3 = keyInteirosEx3;
        }
    }
    return menorIndiceEx3;
}

console.log(indiceMenorInteiro(inteirosEx3));

/*
4.Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .
*/

let nomesEx4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNomeEx4(nomesEx4){
    let maiorNomeEx4 = nomesEx4[0];
    for(let posicaoEx4 in nomesEx4){
        if(nomesEx4[posicaoEx4].length > maiorNomeEx4.length){
            maiorNomeEx4 = nomesEx4[posicaoEx4];
        }
    }
    return maiorNomeEx4;
}

console.log(maiorNomeEx4(nomesEx4));

/*
5.Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 .
*/
let inteirosEx5 = [2, 3, 2, 5, 8, 2, 3];

function repeticaoEx5(inteirosEx5){
    let arrayVazioEx5 = Object.create(null);
    for(let element of inteirosEx5){
        if(arrayVazioEx5[element]) arrayVazioEx5[element] += 1;
        else arrayVazioEx5[element] = 1;
    } console.log(arrayVazioEx5);
    let maiorEl = 0; let final = 0; 
    for(let [key, value] of Object.entries(arrayVazioEx5)){
        if(maiorEl < value){ maiorEl = value; final = key;}
    }
    
    return key;
}

/*
6.Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

let inteiroEx6 = 5;

function somatarioEx6(inteiroEx6){
    let somatarioEx6 = 0;
    for(let somaEx6 = 0; somaEx6 <= inteiroEx6; somaEx6++){
        somatarioEx6 += somaEx6;
    }
    return somatarioEx6;
}

console.log(somatarioEx6(inteiroEx6));

/*
7.Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
Valor de teste: 'trybe' e 'be'
Valor esperado no retorno da função: true
verificaFimPalavra('trybe', 'be') ;
Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan') ;
Retorno esperado: false

*/
