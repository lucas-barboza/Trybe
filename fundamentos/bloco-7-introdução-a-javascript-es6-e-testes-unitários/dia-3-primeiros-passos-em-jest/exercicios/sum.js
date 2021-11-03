function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function encode(string) {
  let novoAray = string.split('');
  for (let posicao = 0; posicao < novoAray.length; posicao += 1) {
    if (novoAray[posicao] === 'a') {
      novoAray[posicao] = '1';
    }
    if (novoAray[posicao] === 'e') {
      novoAray[posicao] = '2';
    }
    if (novoAray[posicao] === 'i') {
      novoAray[posicao] = '3';
    }
    if (novoAray[posicao] === 'o') {
      novoAray[posicao] = '4';
    }
    if (novoAray[posicao] === 'u') {
      novoAray[posicao] = '5';
    }
  }
  stringEx9 = novoAray.join(''); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return stringEx9;
}

function decode(stringEx9A) {
  let novoAray = stringEx9A.split('');
  for (let posicao = 0; posicao < novoAray.length; posicao += 1) {
    if (novoAray[posicao] === '1') {
      novoAray[posicao] = 'a';
    }
    if (novoAray[posicao] === '2') {
      novoAray[posicao] = 'e';
    }
    if (novoAray[posicao] === '3') {
      novoAray[posicao] = 'i';
    }
    if (novoAray[posicao] === '4') {
      novoAray[posicao] = 'o';
    }
    if (novoAray[posicao] === '5') {
      novoAray[posicao] = 'u';
    }
  }
  stringEx9A = novoAray.join(''); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return stringEx9A;
}

function techList(techListArray, techListNome) {
  let lista = [];
  let novoArray = techListArray.sort();
  let saidaVazia = 'Vazio!';
  if (techListArray.length > 0) {
    for (let posicao in novoArray) {
      let objeto = {};
      objeto.tech = novoArray[posicao];
      objeto.name = techListNome;
      lista.push(objeto);
    }
    return lista;
  }
  return saidaVazia;
}

function hydrate(string) {
  let numero = string.replace(/\D+/g, '').split(''); // https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-De-uma-string-em-javascript
  let numeroString = 0;
  for (let posicao = 0; posicao < numero.length; posicao += 1) {
    numeroString += parseInt(numero[posicao], 10); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
    console.log(numeroString);
  }
  return numeroString === 1 ? `${numeroString} copo de água` : `${numeroString} copos de água`;
}

module.exports = {sum,myRemove,myFizzBuzz,encode,decode,techList,hydrate};
