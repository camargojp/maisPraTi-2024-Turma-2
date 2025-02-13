/* Você está desenvolvendo uma aplicação simples de gerenciamento de pedidos de uma cafeteria.
Ao realizar o pedido, o cliente pode escolher entre dois tipos de café: Café Expresso e Café Latte. O tempo de preparação varia de acordo com o tipo de café.
Instruções:

Crie uma função que simule o pedido de um café, utilizando Promises para representar o tempo de preparação do pedido.

    Passo1: Crie uma função fazerPedido que recebe como parâmetro o tipo de café ("expresso" ou "latte"). 
    
    Passo 2: Dentro da função, crie uma Promise que simula o tempo de preparo:
        Café Expresso demora 2 segundos para ficar pronto.
        Café Latte demora 3 segundos para ficar pronto.
        
    Passo 3: A Promise deve ser resolvida caso o café exista, retornando uma mensagem "Seu [tipo de café] está pronto!"
        Caso o tipo de café não seja reconhecido, a Promise deve ser rejeitada com a mensagem "Café não disponível".
        
    Passo 4: Crie uma função assíncrona realizarPedido que chame a função fazerPedido e trate o resultado usando then e catch para lidar com o sucesso e erro da Promise.
    
    exemplo de saída:

        Se o pedido for "expresso", a mensagem deverá aparecer após 2 segundos: "Seu expresso está pronto!"
        Se o pedido for "late", a mensagem deverá aparecer após 3 segundos: " Seu latte está pronto!"
        Se o pedido for u mcafé desconhecido, exiba imediatamente: "Café não disponível"    
*/

function fazerPedido(tipoDeCafe) {
    return new Promise((resolve, reject) => {
        if (tipoDeCafe === 'expresso') {
            setTimeout(() => {
                resolve("Seu expresso está pronto!")
            }, 2000)
        } else if (tipoDeCafe === 'latte') {
            setTimeout(() => {
                resolve("Seu latte está pronto!")
            }, 3000)
        } else {
            reject("Café não disponível")
        }
    })
}

async function realizarPedido(tipoDeCafe) {
  fazerPedido(tipoDeCafe).then((resultado) => {
    console.log(resultado)
  })
  .catch((erro) => {
    console.log(erro)
  })
  }

realizarPedido("expresso")
realizarPedido("latte")
realizarPedido("cappuccino")