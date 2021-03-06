/*
Usando o objeto abaixo, faça os exercícios a seguir:
*/

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
  };

/*
1.Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
Bem-vinda, Margarida
*/

console.log('Bem-vinda, ' + info.personagem);

/*
2.Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
{
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
}
*/

console.log(info);

/*
3.Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
personagem
origem
nota
recorrente
*/

for(let keyInfo in info){
    console.log(keyInfo);
}

/*
4.Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
Margarida
Pato Donald
Namorada do personagem principal nos quadrinhos do Pato Donald
Sim
*/

for(let keyInfo2 in info){
    console.log(info[keyInfo2]);
}

/*
5.Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
*/

info['personagem'] += ' e Tio Patinhas';
info['origem'] += ' e Christmas on Bear Mountain';
info['personagem'] += ' e O último MacPatinhas';
info['recorrente'] = 'Ambos recorrentes // Atenção para essa última linha!';

for (let keyInfo3 in info){
    console.log(info[keyInfo3]);
}
