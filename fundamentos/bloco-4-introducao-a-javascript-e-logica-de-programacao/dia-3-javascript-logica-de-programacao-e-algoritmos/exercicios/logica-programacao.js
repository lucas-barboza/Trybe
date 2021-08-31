/*
1.1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .
*/

let asteriscosEx1 = 5;

if(asteriscosEx1 > 1){
    for(let linha = 0; linha < asteriscosEx1;linha++){
        let salva = '';
        for(coluna = 0;coluna < asteriscosEx1;coluna++){
            salva += '*';
        }
        console.log(salva)
    }
}

/*
2.Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo
*/

let asteriscosEx2 = 5;

if(asteriscosEx2 > 1){
    for(let linha = 0; linha < asteriscosEx2;linha++){
        let salva = '';
        for(coluna = 0;coluna < asteriscosEx2;coluna++){
            salva += '*';
        }
        console.log(salva);
    }
}
