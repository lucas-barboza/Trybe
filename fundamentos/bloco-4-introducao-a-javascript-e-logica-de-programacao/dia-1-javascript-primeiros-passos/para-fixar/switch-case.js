/*
1.Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo, que pode ser: 'aprovada' , 'lista' ou 'reprovada' ;
2.Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada' . Como default , imprima a mensagem de 'não se aplica' .*/

let resultadoProcessoSeletivo;

switch (resultadoProcessoSeletivo){
    case "aprovada":
        console.log("Você foi aprovada.");
        break;
    
    case "lista":
        console.log("Você está na lista de espera.");
        break;

    case "reprovada":
        console.log("Você foi reprovada.");
        break;

    default:
        console.log("Não se aplica");
}