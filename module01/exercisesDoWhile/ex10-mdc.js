console.log('---------------------------------------------------------')
console.log('10 - Encontre o maior divisor comum (MDC) de dois números')
console.log('---------------------------------------------------------')

const prompt = require('prompt-sync')()

let num1 = Number(prompt('Digite o primeiro número positivo: '))
let num2 = Number(prompt('Digite o segundo número positivo: '))
let remainder = 0

do{
    remainder = num1 % num2
    num1 = num2
    num2 = remainder
}
while(num2 !== 0)
console.log('O Máximo Divisor Comum (MDC) é:', num1)