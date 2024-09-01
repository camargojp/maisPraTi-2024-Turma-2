// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

console.log("----------------------------------------");
console.log("Calculadora dos 10 números de Fibonacci ");
console.log("----------------------------------------");

let numA = 0;
let numB = 1;
let numC = 0;
let fibonacci = " ";

fibonacci += numA + " " + numB;

for (let counter = 1; counter <= 8; counter++) {
  numC = numA + numB;
  fibonacci += " " + numC;
  numA = numB;
  numB = numC;
}

console.log(fibonacci);
