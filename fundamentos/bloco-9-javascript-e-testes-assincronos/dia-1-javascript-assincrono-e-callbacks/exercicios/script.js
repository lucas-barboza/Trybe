const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

//1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // C
//Como é uma função sincrona. A ordem de finalização é: A, B e por último a C.

//2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

//Como é um função assíncrona, a ordem de finalização é: A, C e por último a B.

//3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet , de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  setTimeout(() => console.log("Returned planet: ", mars), 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos

//4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature , que imprime a temperatura em Marte.

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), messageDelay);
sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

//5 - Agora que você fez a função que envia a temperatura de Marte, suponha que você consiga enviar para o robô Curiosity o que você deseja fazer, uma vez obtida com sucesso a temperatura em Marte. Logo, adicione na função sendMarsTemperature um callback que contenha as ações a serem tomadas em cima da temperatura.

const messageDelayEx5 = () => Math.floor(Math.random() * 5000);

const getMarsTemperatureEx5 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...

const sendMarsTemperatureEx5 = (callback) => {
  setTimeout(() => {
    callback(getMarsTemperatureEx5());
    }, messageDelayEx5());
}

sendMarsTemperatureEx5(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperatureEx5(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

//6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature um outro callback que contenha as ações a serem tomadas em caso de falha.

const messageDelayEx6 = () => Math.floor(Math.random() * 5000);

const getMarsTemperatureEx6 = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheitEx6 = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheitEx6 = (temperature) =>
  console.log(`It is currently ${toFahrenheitEx6(temperature)}ºF at Mars`);

const greetEx6 = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleErrorEx6 = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperatureEx6 = (callback, callbackError) => {
  setTimeout(() => {
  const fifthPercent = Math.random() <= 0.6;
  if (fifthPercent) return callback(getMarsTemperature());
  else callbackError('Curiosity is busy');
  }, messageDelay());
};

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureEx6(temperatureInFahrenheitEx6, handleErrorEx6);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperatureEx6(greetEx6, handleErrorEx6);