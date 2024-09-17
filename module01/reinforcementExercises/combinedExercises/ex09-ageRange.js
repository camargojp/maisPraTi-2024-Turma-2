console.log("------------------------------------------")
console.log("9 - Verifique a faixa etária de uma pessoa")
console.log("------------------------------------------")

const prompt = require("prompt-sync")()

let age = Number(prompt("Digite a idade da pessoa: "))

if(age < 0){
    console.log("Idade inválida. Por favor, insira um número positivo.")
}

let ageRange = 0

if(age >= 0 && age <= 12){
    ageRange = "Criança"
}
else if(age >= 13 && age <= 17){
    ageRange = "Adolescente"
}
else if(age >= 18 && age <= 59){
    ageRange = "Adulto"
}
else{
    ageRange = "Idoso"
}

switch(ageRange){
    case "Criança":
        console.log("Você é uma criança. Aproveite sua infância!")
        break
    case "Adolescente":
        console.log("Você é um adolescente. Aproveite esta fase de conhecimento e aprendizado!")
        break
    case "Adulto":
        console.log("Você é um adulto. É hora de assumir responsabilidades e aproveitar a vida adulta!")
        break
    case "Idoso":
        console.log("Você é um idoso. Aproveite a sabedoria e a experiência adquirida ao longo dos anos")
        break
    default:
        console.log("Faixa etária desconhecida")
}
