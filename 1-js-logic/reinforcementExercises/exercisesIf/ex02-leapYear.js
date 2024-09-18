console.log('----------------------------------')
console.log('2 - Verifique se um ano é bissexto')
console.log('----------------------------------')

//Um ano é bissexto se for divisível por 4,mas não por 100, exceto se também for divisível por 400. Imprima uma mensagem apropriada.

const prompt = require('prompt-sync')()

let year = Number(prompt('Digite um ano para saber se ele é bissexto: '))

if(year % 4 === 0) {
    if(year % 100 !== 0 || year % 400 === 0){
        console.log( year,'é um ano bissexto!')
    }
    if(year % 100 === 0 && year % 400 !== 0){
        console.log( year,'não é um ano bissexto!')
    }
}
if (year % 4 !== 0){
    console.log( year,'não é um ano bissexto!')
}     