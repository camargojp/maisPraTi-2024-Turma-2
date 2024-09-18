/*3. Filtrando Propriedades de Objetos
Objetivo: Dado um objeto produto com várias propriedades, crie uma
unção que retorna um novo objeto contendo apenas as propriedades cujo
valor seja maior que um valor específico. Use for in para filtrar as
propriedades.*/

const produto = {
    nome: "Teclado Mecânico",
    switch: "Red",
    Peso: "0.75", 
    preco: "500", 
    garantia: "2",
    quantidade: "20"
}

function filtrarPropriedade(obj, valorComparacao) {
    let novoObj = {}
    
    for(let prop in obj) {
        if(obj[prop] > valorComparacao) {
            novoObj[prop] = obj[prop]
        }
    }

    return novoObj
}

let valorComparacao = 10
let produtoFiltrado = filtrarPropriedade(produto, valorComparacao)

console.log(produtoFiltrado)