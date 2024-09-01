/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/

console.log("---------------------------");
console.log("Verifique se é um triângulo");
console.log("---------------------------");

const prompt = require("prompt-sync")();

let a = Number(prompt("Informe o lado A: "));
let b = Number(prompt("Informe o lado B: "));
let c = Number(prompt("Informe o lado C: "));

if (a < b + c && b < a + c && c < a + b) {
  if (a === b && b === c) {
    console.log("Formam um triângulo do tipo: Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Formam um triângulo do tipo: Isósceles");
  } else {
    console.log("Formam um triângulo do tipo: Escaleno");
  }
} else {
  console.error("Não é possível formar um triângulo com os lados fornecidos!");
}
