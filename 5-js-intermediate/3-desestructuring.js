// let numeros = [10, 20, 41]

// const [primeiro, , terceiro] = numeros

// console.log(primeiro)
// console.log(segundo)
// console.log(terceiro)


// let pessoa = {
//     nome: 'Geromel',
//     idade: 39,
//     profissao: 'Cão de guarda'
// }

// const {nome, idade, profissao} = pessoa

// console.log(nome)
// console.log(idade)
// console.log(profissao)

// const {nome: nomePessoa, idade: anos, cidade = 'Rio de Janeiro'} = pessoa

// console.log(nomePessoa)
// console.log(anos)
// console.log(cidade)

// com base nesse array: numeros = [10, 20, 30, 40, 50, 60]

//Use a desestruturação de arrays para atribuir os valores dos três primeiros elementos para as variáveis a, b e c.

// let numeros = [10, 20, 30, 40, 50, 60]

// const [a, b, c] = numeros

// console.log(a)
// console.log(b)
// console.log(c)

// Exemplo de desestruturação de objeto aninhado
const desenvolvedor = {
    nome: 'Carlos',
    idade: 32,
    contato: {
      email: 'carlos.dev@example.com',
      endereco: {
        cidade: 'Porto Alegre',
        estado: 'RS',
        pais: 'Brasil'
      }
    },
    projetos: ['Website', 'App Mobile', 'API']
}

//1. Desestruture nome e idade diretamente do objeto
//2. Extraia o email da propriedade contato
//3. Extraia cidade, estado e país do objeto aninhado endereço
//4. Extraia o primeiro e o segundo objeto da lista de projetos


//1.

const {nome, idade} = desenvolvedor
console.log(nome)
console.log(idade)

//2.

const {contato: {email}} = desenvolvedor
console.log(email)

//3.

const {contato: {endereco: {cidade, estado, pais}}} = desenvolvedor
console.log(cidade)
console.log(estado)
console.log(pais)

//4. 

const {projetos: [primeiro, segundo, terceiro]} = desenvolvedor
console.log(primeiro)
console.log(segundo)