/*9. Contabilizando Elementos com uma Condição
Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

const clientes = [
    {nome: "Pedro", idade: "25", cidade: "São Paulo"},
    {nome: "Daniel", idade: "35", cidade: "Rio de Janeiro"},
    {nome: "Lucas", idade: "40", cidade: "Porto Alegre"},
    {nome: "Marcelo", idade: "29", cidade: "Belo Horizonte"},
    {nome: "Patrick", idade: "32", cidade: "Curitiba"}
]

let maisDe30 = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30)
        maisDe30++
})

console.log(`Número de clientes com mais de 30 anos: ${maisDe30}`)