/*1. Acessando Propriedades de Objetos
Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console.*/

const carro = {
    marca:"Volkswagen",
    modelo:"Nivus",
    ano:"2023",
    cor:"cinza moonstone"
}

for(const propriedades in carro) {
    console.log(`${propriedades}: ${carro[propriedades]}`)
}