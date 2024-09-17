
console.log("----------------------------------------------------------")
console.log("3 - Calcule a média de três números e determine o conceito")
console.log("----------------------------------------------------------")

const prompt = require("prompt-sync")()

let grade1 = Number(prompt("Digite a primeira nota: "))
let grade2 = Number(prompt("Digite a segunda nota: "))
let grade3 = Number(prompt("Digite a terceira nota: "))
let average = (grade1 + grade2 + grade3) / 3
let letterGrade = 0

if (average >= 90){
    letterGrade = "A"
}
else (average >= 80 && average <= 89)
    letterGrade = "B"

if (average >= 70 && average <= 79){
    letterGrade = "C"
}
else (average >= 60 && average <= 69)
    letterGrade = "D"

if (average >= 0 && average <= 59){
    letterGrade = "F"
}
console.log("Média:",average)
console.log("Conceito:",letterGrade)