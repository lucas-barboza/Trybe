const oddsAndEvens = [13, 3, 4, 10, 7, 2];

for(let i = 0; i < oddsAndEvens.length; i += 1) {
  for(let j = 0; j < (oddsAndEvens.length); j += 1) {
    if (oddsAndEvens[j] >= oddsAndEvens[j + 1]) {
      let aux = oddsAndEvens[j];
      oddsAndEvens[j] = oddsAndEvens[j + 1];
      oddsAndEvens[j + 1] = aux;
      console.log(oddsAndEvens);
  }
  }
}

console.log(`Os números ${oddsAndEvens} se encontram em ordem crescente`);