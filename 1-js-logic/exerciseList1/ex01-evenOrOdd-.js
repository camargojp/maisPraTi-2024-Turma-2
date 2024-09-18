// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

console.log("-------------");
console.log("Par ou Ímpar?");
console.log("-------------");

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite um número: "));

if (num % 2 === 0) {
  console.log(`O número ${num} é PAR!`);
} else {
  console.log(`O número ${num} é IMPAR!`);
}
