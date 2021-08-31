let numbers = [5, 3, 2, 4, 7, 1, 0, 6];

/*
1.Ordene o array numbers em ordem crescente e imprima seus valores;
*/

for(let posicao = 0;posicao < numbers.length;posicao++){
    for(let posicao2 = 0; posicao2 < posicao;posicao2++){
        if(numbers[posicao] < numbers[posicao2]){
            let salvarVariavel = numbers[posicao]
            numbers[posicao] = numbers[posicao2]
            numbers[posicao2] = salvarVariavel;
        }
    }
}

console.log('Array em ordem crescente:',numbers);

/*
2.Ordene o array numbers em ordem decrescente e imprima seus valores;
*/

for(let posicao = 0;posicao < numbers.length;posicao++){
    for(let posicao2 = 0; posicao2 < posicao;posicao2++){
        if(numbers[posicao] > numbers[posicao2]){
            let salvarVariavel = numbers[posicao]
            numbers[posicao] = numbers[posicao2]
            numbers[posicao2] = salvarVariavel;
        }
    }
}

console.log('Array em ordem decrescente:',numbers);