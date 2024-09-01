// Exercícios com 'for'

console.log('----------------------------------')
console.log('2 - Verifique se um número é primo')
console.log('----------------------------------')

const prompt = require('prompt-sync')()

let num = Number(prompt('Digite um número: '))
let isPrime = 0

if (num === 1){
    console.log('1 não é um número Primo!')
}
else if(num > 1){
for(isPrime = 2; isPrime < num; isPrime++){
    if (num % isPrime == 0){
        isPrime = false;
        break
    }
}
if (isPrime){
    console.log('é Primo!')
} else{
    console.log('Não é Primo!')
}
}