console.log('------------------------------------------------')
console.log('4 - Calcule o fatorial de um número usando while')
console.log('------------------------------------------------')

const prompt = require('prompt-sync')()

let num = 0
let fact = 1
let i = 1

num = Number(prompt('Digite um número inteiro para calcular seu fatorial: '))

while(i <= num){
    fact = fact*i
    i++
}
console.log(fact)