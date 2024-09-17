/*5. Calculando Valores em Arrays de Objetos
Objetivo: Crie um array de objetos alunos, cada um com propriedades
nome, nota1, e nota2. Use for of para calcular a média das notas de cada
aluno e exibir o nome do aluno junto com sua média..*/

const alunos = [
    {nome: "Naruto", nota1: 6.5, nota2: 7.0},
    {nome: "Sasuke", nota1: 9.0, nota2: 8.0},
    {nome: "Sakura", nota1: 7.5, nota2: 7.0}
]

for (const aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2
    
    console.log(`Nome: ${aluno.nome}, Média: ${media.toFixed(2)}`)
}
