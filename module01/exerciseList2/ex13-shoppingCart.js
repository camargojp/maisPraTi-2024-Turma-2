/*13. Implementando um Carrinho de Compras
Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.*/

const carrinho = {
  itens: [
    {nome: "Laptop", quantidade: 1, precoUnitario: 2600},
    {nome: "Smartphone", quantidade: 2, precoUnitario: 4000},
    {nome: "Tablet", quantidade: 1, precoUnitario: 300},
    {nome: "Fones de ouvido", quantidade: 3, precoUnitario: 50}
  ]
}

let total = 0

carrinho.itens.forEach(item => {
  total += item.quantidade * item.precoUnitario
})

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)