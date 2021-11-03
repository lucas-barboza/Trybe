const {sum,myRemove,myFizzBuzz,encode,decode,techList,hydrate} = require('./sum');

describe('Exercicio 1', () => {
  it('Soma o parametro A + B = 9', () => {
    expect(sum(4,5)).toBe(9);
  })
  it('Soma o parametro A + B = 0', () => {
    expect(sum(0,0)).toBe(0);
  })
  it('Recebe parametro do tipo string', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
})

describe('Exercicio 2', () => {
  it('Verifique se a chamada myRemove retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
})

describe('Exercicio 3', () => {
  it('Verifica se o número é divisível por 3 e 5 = fizzbuzz. Só por 3 = fizz e só por 5 = buzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(3)).toEqual('fizz');
    expect(myFizzBuzz(5)).toEqual('buzz');
    expect(myFizzBuzz(1)).toEqual(1);
    expect(myFizzBuzz('3')).toEqual(false);
  })
})

describe('Exercicio 4', () => {
  it('Verifica as funções encode e decode', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
    expect(encode('a,e,i,o,u')).toEqual('1,2,3,4,5');
    expect(decode('1,2,3,4,5')).toEqual('a,e,i,o,u');
    expect(encode('b,e,c,o,u')).toEqual('b,2,c,4,5');
    expect(decode('1,7,3,9,5')).toEqual('a,7,i,9,u');
    expect(encode('a').length).toBe(1);
    expect(decode('1').length).toBe(1);
  })
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
