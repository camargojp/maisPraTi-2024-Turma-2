console.log("------------------------------------------")
console.log("10 - Calcule o IMC e determine a categoria")
console.log("------------------------------------------")

const prompt = require("prompt-sync")()

let weight = Number(prompt("Digite o peso(Kg): "))
let height = Number(prompt("Digite a altura(M): "))
let IMC = weight / height**2 

if(IMC < 18.5){
    console.log("Abaixo do peso!")
}
else if(IMC >= 18.5 && IMC <= 24.9){
    console.log("Peso normal!")
}
else if(IMC >= 25 && IMC <= 29.9){
    console.log("Sobrepeso!")
}
else if(IMC >= 30 && IMC <= 34.9){
    console.log("Obesidade grau I")
}
else if(IMC >= 35 && IMC <= 39.9){
    console.log("Obesidade grau II")
}
else{
    console.log("Obesidade grau III")
}