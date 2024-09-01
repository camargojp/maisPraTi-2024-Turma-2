console.log('-------------------------------------------------------')
console.log('1 - Verifique se um número é positivo, negativo ou zero')
console.log('-------------------------------------------------------')

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número: '))

if(num > 0){
    console.log('O número é POSITIVO!')
}
if(num < 0){
    console.log('O número é NEGATIVO!')
}
if(num == 0){
    console.log('O número é ZERO!')
}