console.log("-----------------------------")
console.log("6 - Verifique o dia da semana")
console.log("-----------------------------")

const prompt = require("prompt-sync")()

let option = Number(prompt("Escolha um número de 1 a 7 para um dia da semana: "))

switch(option){
    case 1:
        console.log("1 - domingo")
        break
    case 2:
        console.log("2 - segunda-feira")
        break
    case 3:
        console.log("3 - terça-feira")
        break
    case 4:
        console.log("4 - quarta-feira")
        break
    case 5:
        console.log("5 - quinta-feira")
        break
    case 6:
        console.log("6 - sexta-feira")
        break
    case 7:
        console.log("7 - sabádo")
        break
    default:
        console.log("Escolha uma opção válida!")
        break
}