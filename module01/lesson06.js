//Operadores relacionais

const PromptSync = require("prompt-sync");

// console.log(10 > 5) //true
// console.log(10 < 5) //false
// console.log(10 <= 5) //false
// console.log(10 >= 5) //true
// console.log(10 == 5) //false
// console.log(10 == '10') //true
// console.log(10 === '10') //false
// console.log(10 != '10') //false
// console.log(10 !== '10') //true

//Operadores lógicos

// console.log((10 < 5) && (10 > 2))
// console.log((10 > 5) || (10 < 2))
// console.log((10 > 5) || !(10 < 2))
// console.log(!(10 > 5) || (10 < 2))

// let username = "Kanon" 
// let password = "1234"

// let authentication = username === 'Kanon' && password === '1234'

// console.log(authentication)

// const grade = 60

// // if (grade >= 60){
// //     console.log('APROVADO!')
// // }

// if (grade >= 60){
//     console.log('APROVADO!')
// }

// else {
//     console.log('REPROVADO!')
// }

// let age = 17

// if ((age >= 18) && (age <= 32)){
//     console.log('IDADE DENTRO DO EDITAL!')
// }
// else {
//     console.log('IDADE FORA DO EDITAL!')
// }

// // <condição> ? <verdadeiro> : <falso>
// let ternaryResult = (10 < 100) ? 'Verdadeira' : 'Falsa'

//Exercício 1: Verificar Número Par ou ímpar

//Descrição: Escreva um programa que solicite ao usuário um número e verifique se ele é par ou ímpar.

// let number = 22

// if ((number % 2) == 0){
//     console.log('O número é PAR!')
// }

// else{
//     console.log('O número é IMPAR!')
// }

// Exercício 2: Comparação de Três Números

// Descrição: Escreva um programa que receba três números e determine qual é o maior.

// let num1 = 2
// let num2 = 5
// let num3 = 3

// if ((num1 > num2 ) && (num1 > num3)){
//     console.log('O primeiro valor é o maior!')
// }

// else if((num2 > num1) && (num2 > num3)){
//     console.log('O segundo valor é o maior!')
// }

// else if((num3 > num2) && (num3 > num1)){
//     console.log('O terceiro valor é o maior!')
// }

//Exercício 3: Calculadora Simples

//Descrição: Escreva um programa que implemente uma calculadora simples com operações de adição, subtração,
//multiplicação e divisão.

// let num1 = 3
// let num2 = 2
// let calc = 1

// if(calc === 1) {
//     console.log(num1 + num2)
// } else if(calc === 2) {
//     console.log(num1 - num2)
// } else if(calc === 3) {
//     console.log(num1 * num2)
// } else if(calc === 4) {
//     console.log(num1 / num2)
// }

//Exercício 3 usando imput do usuário

// const prompt = require('prompt-sync')()

// let num1 = Number(prompt("Insira o primeiro valor: "))
// let num2 = Number(prompt("Insira o segundo valor: "))
// let operation = prompt("Informe a operação desejada (+, -, /, *): ")
// let result = 0

// if(operation === '+'){
//     result = num1 + num2
// } else if (operation === '-'){
//     result = num1 - num2
// } else if (operation === '/'){
//     if(num2 !== 0){
//         result = num1 / num2
//     } else {
//         console.log("Erro divisão por zero!")
//         result = undefined
//     }
// } else if (operation === '*'){
//     result = num1 * num2
// } else {
//     console.log('Operação inválida!')
//     result = undefined
// }

// if(result !== undefined){
//     console.log("Resultado ", result)
// }

// let option = 0

// switch(option) {
//     case 1:
//         console.log('Você selecionou a primeira opção')
//         break
//     case 2:
//         console.log('Você selecionou a segunda opção')
//         break
//     default:
//         console.log('Você não escolheu nenhuma das opções')
//         break
//}

// Exercício

// const prompt = require('prompt-sync')()

// let option = Number(prompt("Insira um valor de 1 a 7 para um dia da semana: "))

// switch(option) {
//     case 1:
//         console.log('Domingo')
//         break
//     case 2:
//         console.log('Segunda-Feira')
//         break
//     case 3:
//         console.log('Terça-Feira')
//         break
//     case 4:
//         console.log('Quarta-Feira')
//         break
//     case 5:
//         console.log('Quinta-Feira')
//         break
//     case 6:
//         console.log('Sexta-Feira')
//         break
//     case 7:
//         console.log('Sábado')
//         break
//     default:
//         console.log('Você não escolheu uma opção válida!')
//         break
// }

//Exercício refazer a calculadora com switch case ao inves de if

const prompt = require('prompt-sync')()

let num1 = Number(prompt("Insira o primeiro número: "))
let num2 = Number(prompt("Insira o segundo número: "))
let option = Number(prompt("Selecione a operação desejada: 1 - Adição, 2 - Subtração, 3 - Multiplicação, 4 - Divisão: "))
let result = 0

switch(option){
    case 1:
        result = num1 + num2
        console.log('Resultado =', result)
        break
    case 2:
        result = num1 - num2
        console.log('Resultado =', result)
        break
    case 3:
        result = num1 * num2
        console.log('Resultado =', result)
         break
    case 4:
        result = num1 / num2
        console.log('Resultado =', result)  
        break
    default:
        console.log('Opção Inválida!')
        break
}
