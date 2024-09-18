/*2. Verificando Propriedades
Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto.*/

const livro = {
    titulo:"Pai Rico Pai Pobre",
    autor:"Robert T. Kiyosaki",
    anoPublicacao:"1997",
    genero:"Educação Financeira"
}

let editoraExiste = false

for(let propriedade in livro) {
    if (propriedade === "editora") {
        editoraExiste = true
        break
    }
}

if (editoraExiste == false) {
    livro.editora = "Alta Books"
}

console.log(livro)