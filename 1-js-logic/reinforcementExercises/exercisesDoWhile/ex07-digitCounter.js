console.log('------------------------------------------')
console.log('7 - Conte o número de dígitos de um número')
console.log('------------------------------------------')

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número para saber quantos dígitos tem: '))
num = parseInt(num, 10)
let counter = 0

do{
    counter++
    num = parseInt(num / 10)
}
while(num > 0)

console.log('Número de dígitos:', counter)