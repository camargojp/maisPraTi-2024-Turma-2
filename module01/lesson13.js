/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 6.0 como média).
*/

// let professor = {
//     name: "Agostinho Carrara",
//     subject: "Mathematics",
//     grades: {
//         student1: 7.5,
//         student2: 8.0,
//         student3: 6.5,
//         student4: 5.0,
//         student5: 9.0,
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for (let student in professor.grades) {
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// if (average >= 6.0) {
//     console.log(
//         `Com a média ${average}, os alunos do professor ${professor.name} estão acima da média de aprovação
//         na disciplina`
//     )
// } else {
//     console.log(
//         `Com a média ${average}, os alunos do professor ${professor.name} não estão acima da média de aprovação
//         na disciplina`
//         )
// }


// let professor = {
//     name: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: 10.0,
//         student2: 7.0,
//         student3: 8.0,
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades){
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// console.log(`A nota média da turma é: ${average.toFixed(2)}`)
// console.log(average >= 6 
//     ? `${professor.name} está acima da média.`
//     : `${professor.name} está abaixo da média.`
// )

/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

// const library = [
//     {title: 'O senhor dos Anéis', year: 1954},
//     {title: 'Harry Potter e a Pedra Filosofal', year: 1997},
//     {title: 'O Código da Vinci', year: 2003},
//     {title: '1984', year: 1949},
//     {title: 'O Hobbit', year: 1937}
// ]

// for ( const book of library) {
//     if (book.year < 2000) {
//         console.log(`Título: ${book.title}, Ano: ${book.year}`)
//     }
// }

/*
    Objetivo: COntar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem.
    Se existir, incremente a contagem; se nâo, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const movies = [
    {title: "Tropa de Elite", genre: "Militar"},
    {title: "Top Gun", genre: "Ação"},
    {title: "Interestelar", genre: "Sci-Fi"},
    {title: "Senhor dos Anéis", genre: "Aventura"},
    {title: "Poderoso Chefão", genre: "Máfia"},
    {title: "Vignadores: Ultimato", genre: "Heróis"},
    {title: "Deadpool & Wolverine", genre: "Heróis"}
]

let genreCount = {}

movies.forEach(movie => {
    if(genreCount[movie.genre]){
        genreCount[movie.genre]++
    } else {
        genreCount[movie.genre] = 1
    }
})

for(let genre in genreCount)
    console.log(`Existe(m)genre ${genreCount[genre]} filme(s) do gênero ${genre}`)