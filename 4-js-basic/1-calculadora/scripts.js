function inserir(valor){
    let display = document.formulario.display
    
    if(display.value.length < 14){
        if(isOperador(valor) && isOperador(display.value[display.value.length - 1])){
            return
        }
    }

    display.value += valor
}

function limparTela(){
    document.formulario.display.value = ""
}

function deletar(){
    let display = document.formulario.display
    display.value = display.value.slice(0, -1)
}

function calcularTotal(){
    let display = document.formulario.display
    const expressao = display.value

    if(expressao && !isOperador(expressao[expressao.length - 1])){
        try{
            let resultado = calcularExpressao(expressao)
            display.value = resultado
        } catch (error){
            alert("Expressão inválida")
            limparTela()
        }
    }
}

function isOperador(char){
    return['+', '-', '/', '*'].includes(char)
}

function calcularExpressao(expressao){
    return eval(expressao)
}