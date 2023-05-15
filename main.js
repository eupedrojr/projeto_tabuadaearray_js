const numeros = [2.5, 3.7, 5.2, 6.8, 8.1];

// a) O quadrado
const quadrados = numeros.map(num => num ** 2);
console.log('Quadrados:', quadrados);

// b) A raiz quadrada
const raizes = numeros.map(num => Math.sqrt(num));
console.log('Raizes:', raizes);

// c) Apenas a parte inteira
const inteiros = numeros.map(num => Math.floor(num));
console.log('Parte inteira:', inteiros);

// d) O número arredondado para baixo
const arredondamentosBaixo = numeros.map(num => Math.floor(num));
console.log('Arredondamentos para baixo:', arredondamentosBaixo);

// e) O número arredondado para cima
const arredondamentosCima = numeros.map(num => Math.ceil(num));
console.log('Arredondamentos para cima:', arredondamentosCima);
