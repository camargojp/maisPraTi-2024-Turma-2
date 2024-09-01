/* 
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

console.log("-----------------------------");
console.log("Verifique a sua faixa etária ");
console.log("-----------------------------");

const prompt = require("prompt-sync")();

let age = parseInt(prompt("Digite a sua idade: "));

if (age >= 0 && age <= 12) {
  console.log("Você é uma Criança!");
} else if (age >= 13 && age <= 17) {
  console.log("Você é um Adolescente!");
} else if (age >= 18 && age <= 59) {
  console.log("Você é um Adulto!");
} else if (age >= 60) {
  console.log("Você é um Idoso!");
} else {
  console.error("Digite uma idade válida!");
}
