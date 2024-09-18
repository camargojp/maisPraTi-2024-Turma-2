/*7. Modificando Objetos em um Array
Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.*/

const produtos = [
    {nome: "Mousepad", preco: 90, desconto: 0.1},
    {nome: "Mouse Gamer", preco: 175, desconto: 0.1},
    {nome: "Teclado Mecânico", preco: 499, desconto: 0.1},
    {nome: "Monitor 144hz", preco: 1200, desconto: 0.1},
    {nome: "Headset", preco: 200, desconto: 0.1}
]

produtos.forEach(produto => {
    const descontoAplicado = produto.preco * produto.desconto
    produto.precoComDesconto = produto.preco - descontoAplicado

    console.log(`Produto: ${produto.nome}, Preço: R$ ${produto.preco}, Preço com 10% de desconto: R$ ${produto.precoComDesconto}`)
})