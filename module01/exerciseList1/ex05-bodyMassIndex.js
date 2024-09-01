/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina 
a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
*/

console.log("------------------");
console.log("Calculadora de IMC");
console.log("------------------");

const prompt = require("prompt-sync")();

let weight = Number(prompt("Digite o seu peso (KG): "));
let height = Number(prompt("Digite a sua altura (M): "));
let bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log(`seu IMC é ${bmi.toFixed(2)} e sua categoria é: Baixo peso!`);
} else if (bmi >= 18.5 && bmi <= 24.9) {
  console.log(`seu IMC é ${bmi.toFixed(2)} e sua categoria é: Peso normal!`);
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(`seu IMC é ${bmi.toFixed(2)} e sua categoria é: Sobrepeso!`);
} else {
  console.log(`seu IMC é ${bmi.toFixed(2)} e sua categoria é: Obesidade!`);
}
