// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

console.log("-----------------");
console.log("Soma de 5 números");
console.log("-----------------");

const prompt = require("prompt-sync")();

let totalSum = 0;

for (let i = 1; i <= 5; i++) {
  let num = Number(prompt(`${i}º número: `));
  totalSum += num;
}

console.log(`A soma total é igual a: ${totalSum}`);
