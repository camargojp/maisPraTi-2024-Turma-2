let title = document.getElementById('title')
let botaoAdicionarItem = document.getElementById('addItem')
let botaoRemoverItem = document.getElementById('removeItem')
let list = document.getElementById('list')

function addItem() {
    let novoItem = document.createElement('li')
    novoItem.innerHTML = `Item ${list.children.length + 1}`
    list.appendChild(novoItem)
    title.innerHTML = 'Novo item adicionado!'
    title.style.color = 'green'
}

function removeItem() {
    if(list.children.length > 0){
    list.removeChild(list.lastElementChild)
    title.innerHTML = 'Item removido'
    title.style.color ='red'
    } else {
    title.innerHTML = 'Não há mais itens para remover.'
    title.style.color = 'gray'
    }
}

botaoAdicionarItem.addEventListener('click', addItem)
botaoRemoverItem.addEventListener('click', removeItem)