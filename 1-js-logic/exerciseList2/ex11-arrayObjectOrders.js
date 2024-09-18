/*11. Agrupando Elementos com forEach
Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

const pedidos = [
    {cliente: "Ana", produto: "Laptop", quantidade: 2},
    {cliente: "Carlos", produto: "Smartphone", quantidade: 1},
    {cliente: "Ana", produto: "Tablet", quantidade: 5},
    {cliente: "Carlos", produto: "Fones", quantidade: 3},
    {cliente: "Julia", produto: "Smartwatch", quantidade: 1},
    {cliente: "Ana", produto: "Nintendo Switch", quantidade: 2}
]

const totalPorCliente = {}

pedidos.forEach(pedido => {
    if (!totalPorCliente[pedido.cliente]){
        totalPorCliente[pedido.cliente] = 0
    }

totalPorCliente[pedido.cliente] += pedido.quantidade
})

console.log(totalPorCliente)