/*10. Criando Relatórios com Objetos e Arrays
Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

const vendas = [
    {produto: "Notebook", quantidade: 3, valor: "5000"},
    {produto: "IPhone", quantidade: 1, valor: "8590"},
    {produto: "Tablet", quantidade: 5, valor: "420"},
    {produto: "Fones", quantidade: 10, valor: "260"}    
]

let total = 0

vendas.forEach(venda => {
    total += venda.quantidade * venda.valor
})

console.log(`Total das vendas: R$ ${total.toFixed(2)}`)