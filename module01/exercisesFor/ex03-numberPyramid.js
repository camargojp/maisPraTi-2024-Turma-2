console.log('-----------------------------------------------------------------------------')
console.log('3 - Escreva um programa que use um loop for para imprimir um triângulo de números')
console.log('-----------------------------------------------------------------------------')

let rows = 5
let pyramid = 0

for (let i = 1; i <= rows; i++) {
    pyramid = ""
    for (let j = 1; j <= i; j++) {
      pyramid += i + " "
    }
    console.log(pyramid)
}