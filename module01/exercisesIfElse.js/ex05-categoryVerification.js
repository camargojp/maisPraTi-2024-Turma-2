console.log("---------------------------------------")
console.log("5 - Verifique a categoria de um nadador")
console.log("---------------------------------------")

// Infantil A: 5 - 7 anos
// Infantil B: 8 - 10 anos
// Juvenil A: 11 - 13 anos
// Juvenil B: 14 - 17 anos
// Adulto: 18 anos ou mais

const prompt = require("prompt-sync")()

let age = Number(prompt("Digite a idade do nadador: "))

if(age >= 5 && age <= 7){
    console.log("Categoria: INFANTIL A")
}
else if(age >= 8 && age <= 10){
    console.log("Categoria: INFANTIL B")
}
else if(age >= 11 && age <= 13){
    console.log("Categoria: JUVENIL A")
}
else if(age >= 14 && age <= 17){
    console.log("Categoria: JUVENIL B")
}
else{
    console.log("Categoria: ADULTO")
}