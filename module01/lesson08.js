const prompt = require('prompt-sync')()

//Exercício 1
// const num1 = Number(prompt('Digite um número: '))

// if(num1 > 0) {
//     console.log('O número informado é positivo!')
// } else if (num1 < 0) {
//     console.log('O número informado é negativo!')
// } else if (num1 === 0) {
//     console.log('O número é zero.')
// } else {
//     console.log('Erro! Informe um número.')
// }

//Exercício 2

// const year = Number(prompt('Informe um ano: '))

// if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
//     console.log(`O ano ${year} é bissexto`)
// } else {
//     console.log(`${year} não é um ano bissexto`)
// }

//Exercício 3

// let grade1 = Number(prompt('Informe a primeira nota: '))
// let grade2 = Number(prompt('Informe a segunda nota: '))
// let grade3 = Number(prompt('Informe a terceira nota: '))

// let avg = (grade1 + grade2 + grade3)/3
// let concept 

// if(avg >= 90){
//     console.log(`A média das notas é ${avg.toFixed(2)}`)
//     concept = 'A'
// } else if (avg <= 80){
//     console.log(`A média das notas é ${avg.toFixed(2)}`)
//     concept = 'B'
// } else {
//     console.log('É outra nota.')
// }

// console.log('O conceito do aluno é: ' + concept)

//Exercício 9

// let age = Number(prompt('Informe a sua idade: '))

// let ageRange

// if(age >= 0 && age <= 12){
//     ageRange = 'Criança'
// } else if(age >= 13 && age <= 17){
//     ageRange = 'Adolescente'
// } else if(age >= 18 && age <= 60){
//     ageRange = 'Adulto'
// } else {
//     ageRange = 'Idade inválida'
// }

// switch(ageRange) {
//     case 'Criança':
//         console.log('Você é uma criança!')
//         break
//     case 'Adolescente':
//         console.log('Você é um(a) adolescente!')
//         break
//     case 'Adulto':
//         console.log('Você é um(a) adulto(a)!')
//     default:
//         console.log('Idade inválida!')
// }

//Exercício 10

// let num1 = Number(prompt('Informe o primeiro valor: '))
// let num2 = Number(prompt('Informe o segundo valor: '))

// let a = num1
// let b = num2

// do {
//     let temp = b
//     b = a % b
//     a = temp
// } while(b !== 0)

// const MDC = a

// console.log(`O maior divisor comum ${(num1)} e ${(num2)} é ${(MDC)}`)

//Exercicío Primos

// let count = 0
// let num = 100

// do {
//     let prime = 0
//     for(let i = 1; i <= num; i++){
//         if(num % i === 0){
//             prime++
//         }
//     }
//     if(prime === 2){
//         console.log(num)
//         count++
//     }

//     num++
// } while(count < 50)

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10 
carros[2] = true
carros['Hyago'] = '10'

let motos = Array('CBR', 'Ninja', 10)
let livros = ['Senhor dos Anéis', 'O Hobbit', 'Harry Potter']

// livros.push('Sherlock Holmes')
// livros.unshift('1984')
// livros.pop(0)
// livros.shift()
livros.splice(2, 0, 'Animais Fantásticos')
console.log(livros)