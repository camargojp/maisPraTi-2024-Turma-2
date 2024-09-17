/*6. Filtrando Arrays de Objetos
Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.*/

const funcionarios = [
    {nome: "Julia" , cargo: "Programadora", salario: 5000},
    {nome: "Pedro" , cargo: "Analista", salario: 7000},
    {nome: "Maria" , cargo: "Pedagoga", salario: 3500} ,   
    {nome: "João" , cargo: "Engenheiro", salario: 7500},
    {nome: "Erick" , cargo: "Designer", salario: 4000},
    {nome: "Daniel" , cargo: "Advogado", salario: 3750}
]

const salarioMinimo = 4200

console.log(`Funcionários com salário maior que ${salarioMinimo}:`)
for(const funcionario of funcionarios) {
    if(funcionario.salario > salarioMinimo){
        console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: ${funcionario.salario}`)
    }
}