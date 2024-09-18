// let teste = function() {
//     console.log('Olá, mundo!')
// }

// teste()

// function showFunction(successCallback, errorCallback) {
//     if(false) {
//         successCallback("Requisição bem sucedida")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let successCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.error(message)
// }

// showFunction(successCallback, errorCallback)

//Refazer os exercícios da lesson09 porém agora com funções:

//1. Soma dos Elementos de um Array

// function arraySum(arr) {
//     let sum = 0

//     for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//     }

//     return sum
// } 

// let arr = [10, 20, 30, 40]
// let sum = arraySum(arr)

// console.log(`A Soma é: ${sum}`)
    
// 2. Encontre o Maior Número em um Array
    
// function findMax(arr) {
//     let max = arr[0]

//     for(let j = 0; j < arr.length; j++) {
//         if(arr[j] > max) {
//             max = arr[j]
//         }
//     }

//     return max
// }

// let arr = [10, 20, 30, 40]
// let max = findMax(arr)

// console.log(`O maior número dentro do array é: ${max}`)


//3. Reverter um Array

// function invertArray(arr) {
//     let reversed = []
//     for(let k = arr.length - 1; k >= 0; k--){
//         reversed.push(arr[k])
//     }
//     return reversed    
// }

// let arr = [10, 20, 40, 30]
// let reversed = invertArray(arr)
// console.log(reversed)

//4. Criem um novo array contendo apenas os números pares

// let arr = [10, 20, 40, 30]
// let evens = []

// for(let m = 0; m < arr.length; m++){
//     if(arr[m] % 2 === 0){
//         evens.push(arr[m])
//     }
// }

// console.log(evens)

// function onlyEvens(arr) {
//     let evens = []
//     for(let m = 0; m < arr.length; m++) {
//         if(arr[m] % 2 === 0) {
//             evens.push(arr[m])
//         }
//     }
//     return evens
// }

// let arr = [10, 20, 40, 30]
// let evens = onlyEvens(arr)

// console.log(evens)


// console.log(evens)

//5. Contar Ocorrências de um Valor

// function numberOfOcurrences(arr, value) {        
//     let count = 0
//     for(let l = 0; l < arr.length; l++) {
//         if(arr[l] === value){
//             count++
//         }
//     }
//     return count
// }

// const prompt = require('prompt-sync')()
// let value = Number(prompt('Insira o valor a ser pesquisado: '))
// let arr = [10, 10, 7, 5, 10]

// let count = numberOfOcurrences(arr, value)
// console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)

// let nome = " Equipe Olímpica " 

// console.log("João".length)
// console.log("João".charAt(0))
// console.log(nome.indexOf('ã'))

// // console.log(nome.replace('João', 'Kanon'))

// console.log(nome.substr(7, 8))

// console.log(nome.toUpperCase())
// console.log(nome.toLowerCase())

// console.log('-' + nome.trim() + '-')

//Matemáticos

// console.log(Math.ceil(100.73))
// console.log(Math.floor(100.73))
// console.log(Math.round(100.73))
// console.log(Math.sqrt(100))
// console.log(Math.pow(100, 2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100.20))
// console.log(Math.random())

//datas

// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1)
// console.log(date.getFullYear())

// console.log(date.toString())

// date.setDate(date.getDate() + 720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() + 720)
// console.log(date.toString())

// let date1 = new Date(2024, 7, 26)
// let date2 = new Date(2023, 7, 26)

// console.log(date1.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
// console.log(miliseconds_between_dates)

// let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
// console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

// console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias`)

//Inverter uma string
//Contar vogais
//Gerar número aleatório
//Dias entre duas datas
//Formatar data