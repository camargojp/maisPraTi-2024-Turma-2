// let serie = {
//     nome: "The Boys",
//     genero: ["Ação", "Paródia", "Heróis"],
//     nrTemporadas: 4,
//     status: "Em andamento",
//     classificacao: 18,
//     nrEpisodios: {
//         temp1: 10,
//         temp2: 10,
//         temp3: 50
//     },
    
//     mostrarCaracteristicas: function(){
//         return "O nome da série é: " + this.nome + " e sua classificação é + " + this.classificacao
//     }
// }

// console.log(serie.mostrarCaracteristicas())

let livroAsCronicasDeNarnia = {
    titulo: "O Leão, a Feiticeira e o Guarda-Roupa",
    autor: "C. S. Lewis",
    anoPublicacao: 1950,
    genero: "Fantasia",
    estado: "Leitura em andamento",
    descricao: "A história segue quatro irmãos, Pedro, Susana, Edmundo e Lúcia, que descobrem um mundo\
    mágico chamado Nárnia através de um guarda-roupa. Em Nárnia, eles se envolvem em uma batalha entre\
    o bem e o mal, enfrentando a Feiticeira Branca e ajudando o leão Aslan a restaurar a paz no reino. ",
    personagensPrincipais: ["Aslan", "Feiticeira Branca", "Pedro Pevensie", "Susana Pevensie", "Edmundo Pevensie", "Lúcia Pevensie"],
    
    obterInfo: function() {
        return `${this.titulo} foi escrito por ${this.autor} e publicado em ${this.anoPublicacao}. É um livro do gênero ${this.genero}.`
    }
}

// console.log(livroAsCronicasDeNarnia.obterInfo())

let carro = {
    nome: "Herby",
    modelo: "Marea",
    velocidadeMaxima: 350,
    ano: 2005,

    acelerar: function(){
        return "Acelerando com pé no porão"
    }
}

// console.log(carro)
// console.log(carro.acelerar())

let motor = "1000"
let nome = "bmw s1000rr"
let tipo = "esportiva"

let moto = {
    nome: nome,
    tipo: tipo,
    motor: motor
}

// console.log(moto)

let atleta = {
    nome: "Rayssa Leal",
    esporte: "Skate street",
    idade: 16
}

atleta.nacionalidade = 'Brasil'
atleta.medalhas = {
    ouro: 10,
    prata: 1,
    bronze: 1
}

atleta.celebrarVitoria = () => {return ("GANHEI!")}

// console.log(atleta)
// console.log(atleta.celebrarVitoria())

let obj1 = {
    nome: "Bruce",
    profissao: "Batman",
}

let obj2 = obj1

obj2.companheiro = "Robin"

// console.log(obj1)
// console.log(obj2)

function computador(processador, gpu, ram, armazenamento){
    this.processador = processador
    this.gpu = gpu
    this.ram = ram
    this.armazenamento = armazenamento

    this.ligar = function(){
        console.log(`O ${this.processador} está funcionando!`)
    }

    this.mostrarEspecificacoes = function(){
        return `
            processador: ${this.processador}
            gpu: ${this.gpu}
            ram: ${this.ram}
            armazenamento: ${this.armazenamento}`            
    }
}

let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD")
// console.log(pc.mostrarEspecificacoes())

function jogos(titulo, genero, anoLancamento, empresa){
    return {
        titulo,
        genero,
        anoLancamento,
        empresa,        
    }
}

let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft")

// console.log(jogo1.jogar())

for(let key in jogo1){
    // console.log(`${key}: ${jogo1[key]}`)
}

const jogadores = ['Pelé', 'CR7', 'Messi']

for(let jogador of jogadores){
    console.log(jogador)
}