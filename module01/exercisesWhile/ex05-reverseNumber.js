console.log('-----------------------------------')
console.log('5 - Inverta os dígitos de um número')
console.log('-----------------------------------')

const prompt = require('prompt-sync')()

let n = Number(prompt('Digite os dígitos que deseja inverter: '))
let remainder = 0
let reverse = 0

while(n > 0){
    remainder = n % 10
    reverse = reverse * 10 + remainder
    n = parseInt(n / 10)
}
console.log(reverse)