//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

console.log("--------------------");
console.log("Calculadora de média");
console.log("--------------------");

const prompt = require("prompt-sync")();

let sum = 0;
let counter = 0;
let num = 0;

do {
  num = Number(prompt("Digite um número (digite 0 quando quiser parar): "));

  if (num !== 0) {
    sum += num;
    counter++;
  }
} while (num !== 0);

if (counter > 0) {
  let average = sum / counter;
  console.log(`A média aritmética é ${average.toFixed(2)}.`);
} else {
  console.error("Nenhum número válido foi digitado.");
}
