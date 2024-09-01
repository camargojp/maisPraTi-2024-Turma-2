/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require("prompt-sync")();

console.log("----- Escolha uma das opções abaixo: --------");
console.log("1. Mostrar mensagem de boas vindas.");
console.log("2. Par ou Ímpar.");
console.log("3. Sair.");
console.log("---------------------------------------------");

let option = parseInt(prompt("Digite a opção: "));

switch (option) {
  case 1:
    console.log("Seja muito bem vindo(a)!");
    break;

  case 2:
    let num = parseInt(prompt("Digite um número: "));
    if (num % 2 === 0) {
      console.log(`O número ${num} é PAR!`);
    } else {
      console.log(`O número ${num} é IMPAR!`);
    }
    break;

  case 3:
    console.log("Saindo...");
    break;

  default:
    console.error("Opção inválida. Escolha uma opção válida.");
    break;
}
