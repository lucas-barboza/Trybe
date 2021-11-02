const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//1-Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const turnoNoite = (objeto,chave,valor) => objeto[chave] = valor;
turnoNoite(lesson2, 'turno', 'noite');

//2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = objeto => console.log(Object.keys(objeto));
  
//3-Crie uma função para mostrar o tamanho de um objeto.
const tamanhoObjeto = objeto => console.log(Object.entries(objeto));

//4-Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valoresObjeto = objeto => console.log(Object.values(objeto));

//5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:
const allLesson = (lesson1, lesson2, lesson3) => {
  const allLesson = {};
  Object.assign(allLesson, {lesson1,lesson2,lesson3});
  return allLesson;
}
//6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.
const numeroTotalEstudantes = allLesson => {
  return console.log(`Total de alunos: ${allLesson.lesson1.numeroEstudantes + allLesson.lesson2.numeroEstudantes + allLesson.lesson3.numeroEstudantes}`)
}

//7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNUmber = (objeto, posicao) => {
  const valores = Object.values(objeto);
  console.log(valores[posicao]); 
}

//8-Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
const verifyParValue = (object, key, value) => {
  const valores = Object.entries(object);
  for (let i in valores) {
    if (valores[i][0] === key && valores[i][1] === value) {
      resultado = true;
    } else {
      resultado = false;
    }
  }
  return resultado;
};
