console.log('-------------------------------------------')
console.log('8 - Calcule a soma dos dígitos de um número')
console.log('-------------------------------------------')

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número: '))
num = parseInt(num, 10)
let sum = 0
let digit = 0

do{
    digit = num % 10
    sum += digit
    num = parseInt(num / 10)
}
while(num > 0)

console.log("A soma dos dígitos é:",sum)