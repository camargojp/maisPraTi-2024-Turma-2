console.log('---------------------------------------')
console.log('6 - Verifique se um número é palíndromo')
console.log('---------------------------------------')

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite o número que deseja verificar: '))
let remainder = 0
let reverse = 0
let palindrome = num

while(num > 0){
    remainder = num % 10
    reverse = reverse * 10 + remainder
    num = parseInt(num / 10)
}
if(palindrome === reverse){
    console.log("É um palindromo!")
}
else{
    console.log("Não é um palindromo!")
}    