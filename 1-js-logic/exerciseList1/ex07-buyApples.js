/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/

console.log("---------------");
console.log("Compra de maçãs");
console.log("---------------");

const prompt = require("prompt-sync")();

let apples = parseInt(prompt("Informe a quantidade de maçãs compradas: "));
let price = 0;
let totalPrice = 0;

if (apples < 12) {
  price = 0.3;
} else {
  price = 0.25;
}

totalPrice = apples * price;

console.log(`O valor total da compra é R$ ${totalPrice.toFixed(2)}`);