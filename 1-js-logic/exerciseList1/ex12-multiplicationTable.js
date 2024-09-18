// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

console.log("-----------------------------------------------");
console.log("------------ CALCULADORA DE TABUADA -----------");
console.log("-----------------------------------------------");

const prompt = require("prompt-sync")();

let num = Number(prompt("Digite um número de 1 a 10 para ver sua tabuada: "));

console.log(`Tabuada do ${num}:`);
console.log("---------------------------------------------------");

for (let i = 0; i <= 10; i++) {
  let result = num * i;
  console.log(`${num} x ${i} = ${result}`);
}
