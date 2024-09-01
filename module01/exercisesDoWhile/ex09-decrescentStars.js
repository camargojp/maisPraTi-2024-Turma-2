console.log('--------------------------------------------')
console.log('9 - Imprima um padrão de estrela decrescente')
console.log('--------------------------------------------')

const prompt = require('prompt-sync')()

let rows = Number(prompt('Informe o número de linhas da pirâmide invertida: '))

do{
    let stars= ''
    let i = rows

    while(i > 0){
        stars += '*'
        i--
    }
    console.log(stars)
    rows--
}
while(rows > 0)