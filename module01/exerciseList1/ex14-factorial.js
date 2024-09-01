//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

console.log("-----------------------");
console.log("Calculadora de fatorial");
console.log("-----------------------");

const prompt = require("prompt-sync")();

let num = 0;
let fact = 1;
let i = 1;

num = Number(prompt("Digite um número inteiro para calcular seu fatorial: "));

while (i <= num) {
  fact = fact * i;
  i++;
}
console.log(fact);
