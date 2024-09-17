console.log("-----------------------------------------")
console.log("4 - Verifique se um número é par ou ímpar")
console.log("-----------------------------------------")

const prompt = require("prompt-sync")()

let num = Number(prompt("Digite um número: "))

if(num % 2 == 0){
    console.log("O número", num,"é PAR!")
}
else{
    console.log("O número", num,"é IMPAR!")
}