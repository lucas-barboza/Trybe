const testingScope = (escopo) => {
  let ifScope = (escopo === true) ? 'ótimo, fui utilizada no escopo !' : 'o que estou fazendo aqui ? :O';
  console.log(`Não devo ser utilizada fora do meu escopo (if): ${ifScope}!`);
}

testingScope(true);