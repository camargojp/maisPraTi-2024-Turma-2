/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

console.log("--------------------------");
console.log(" Verifique a sua situação ");
console.log("--------------------------");

const prompt = require("prompt-sync")();

let grade = Number(prompt("Digite sua nota: "));

if (grade >= 6) {
  console.log("você está Aprovado!");
} else if (grade >= 4) {
  console.log("você está de Recuperação!");
} else {
  console.log("você está Reprovado!");
}
