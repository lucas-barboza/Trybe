// 1.Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// 2.Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// 3.Crie uma variável chamada birthYear e atribua a ela o ano em que você nasceu.
// 4.Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// 5.Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// 6.Altere o valor atribuído à constante birthCity . Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

const myName = "Lucas";
const birtchCity = "Ouro Preto";
let birthYear = 1997;
console.log("Nome:", myName,"\nCidade Natal:", birtchCity,"\nAno de nascimento:", birthYear);
birthYear = 2030
console.log("Atribui o valor de 2030 a variável 'birthYear':", birthYear);
/*O erro acontece pelo fato de não pode alterar o valor de variável constante*/