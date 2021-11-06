//1-Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
const gerandoEmail = (nome) => {
	const novoEmail = `${nome.toLowerCase().split(' ').join('_')}@trybe.com`
	return objName = {
		nome,
		novoEmail,
	}
}
const newEmployees = (parametro) => {
  const employees = {
    id1: parametro('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: parametro('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: parametro('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(gerandoEmail));

//2-Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
const numeroEscolhido = () => {
	const numero = Math.floor(Math.random() * 5 + 1);
	console.log(`O número escolhido foi: ${numero}`);
	return numero;
}
const numeroSorteado = () => {
	const numero = Math.floor(Math.random() * 5 + 1);
	console.log(`O número sorteado foi: ${numero}`);
	return numero;
}
const verificaResultado = (numeroEscolhido, numeroSorteado) => numeroEscolhido === numeroSorteado ? 'Parabéns você ganhou' : 'Tente novamente';
console.log(`Resultado: ${verificaResultado(numeroEscolhido(), numeroSorteado())}`)

//3-Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const verificaRespostas = (gabarito, resposta, pontos) => {
	let contador = 0;
	for (let i = 0; i < gabarito.length; i += 1) {
		pontos = acertos(gabarito[i], resposta[i]);
		contador += pontos;
	}
	return `Você acertou ${contador} questões de ${RIGHT_ANSWERS.length}`
}
const acertos = (gabarito, resposta) => {
	if (resposta === gabarito) return 1;
	else return 0;
}
console.log(verificaRespostas(RIGHT_ANSWERS,STUDENT_ANSWERS, acertos()));