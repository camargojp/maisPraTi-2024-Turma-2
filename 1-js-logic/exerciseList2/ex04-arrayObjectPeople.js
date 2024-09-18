/*4. Iterando Sobre Arrays de Objetos
Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console.*/

const pessoas = [
    {nome: "Alice", idade: "28", cidade: "Curitiba"},
    {nome: "Natália", idade: "22", cidade: "São Paulo"},
    {nome: "Júlia", idade: "20", cidade: "Rio de Janeiro"},
    {nome: "João", idade: "27", cidade: "Rio de Janeiro"}
]

for (const pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`)
}