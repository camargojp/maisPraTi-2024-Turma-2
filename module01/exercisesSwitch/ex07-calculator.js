console.log("-------------------------------------------------------")
console.log("7 - Calcule o valor de uma expressão matemática simples")
console.log("-------------------------------------------------------")

const prompt = require("prompt-sync")()

let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
let operation = Number(prompt("Escolha uma operação: 1 - Soma(+), 2 - Subtração(-), 3 - Multiplicação(*), 4 - (divisão)(/): "))
let result = 0

switch(operation){
    case 1:
        result = num1 + num2
        console.log(num1,"+",num2,"=",result)
        break
    case 2:
        result = num1 - num2
        console.log(num1,"-",num2,"=",result)
        break
    case 3:
        result = num1 * num2
        console.log(num1,"*",num2,"=",result)
        break
    case 4:
        result = num1 / num2
        console.log(num1,"/",num2,"=",result)
        break
    default:
        console.log("Insira números válidos!")
        break

}