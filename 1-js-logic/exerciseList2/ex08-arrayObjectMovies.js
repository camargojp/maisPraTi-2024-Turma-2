/*8. Criando Novos Arrays a Partir de Objetos
Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes..*/

const filmes = [
    {titulo: "A Origem", diretor: "Christopher Nolan", anoLancamento: "2010"},
    {titulo: "Matrix", diretor: "Lana Wachowski e Lilly Wachowski", anoLancamento: "1999"},
    {titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: "2014"},
    {titulo: "Um contratempo", diretor: "Oriol Paulo", anoLancamento: "2016"}
]

const titulos = []

filmes.forEach(filme => {
    titulos.push(filme.titulo)
})

console.log(titulos)