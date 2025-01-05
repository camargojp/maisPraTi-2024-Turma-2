class Task {
    constructor(year, month, day, type, description){
        this.year        = year
        this.month       = month
        this.day         = day
        this.type        = type
        this.description = description
    }
    
    validateData() {
        for (let key in this) {
            if(this[key] === undefined || this[key] === "") {
                console.error(`O campo ${key} é obrigatório.`)

                return false
            }

            return true
        }
    }
}

class Database {

    constructor() {
        this.initDatabase()
    }

    initDatabase() {
        const id = localStorage.getItem('id')

        if(id === null) {
            localStorage.setItem('id','0')
        }
    }

    loadTasks() {
        let tasks = []
        let id = localStorage.getItem('id')

        for(let i = 1; i <= id; i++) {
            try {
                let task = JSON.parse(localStorage.getItem(i))
                tasks.push(task)
            } catch (error) {
                console.error(`Erro ao carregar a tarefa com id ${id}`)
            }
        }
        return tasks
    }

    createTask(task) {
        let id = this.getNextId()
        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id', id.toString())
    }

    removeTask(id) {
        localStorage.removeItem(id)
    }

    searchTasks(searchTask) {
        let task = this.loadTasks()

        return task.filter(task => {
            return (searchTask.year ? task.year === searchTask : true) &&
            (searchTask.month ? task.month === searchTask : true) &&
            (searchTask.day ? task.day === searchTask : true) &&
            (searchTask.type ? task.type === searchTask : true) &&
            (searchTask.description ? task.type === searchTask : true)
        })
    }

    getNextId() {
        let currentId = localStorage.getItem('id')
        return parseInt(currentId) + 1
    }
}

const database = new Database()

function registerTask() {
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description)

    if (task.validateData()) {
        database.createTask(task)
        alert('Tafera criada com sucesso!')
    } else {
        alert('Preencha todos os campos.')
    }
}

function resetForm() {
    document.getElementById('year').value = ''
    document.getElementById('month').value = ''
    document.getElementById('day').value = ''
    document.getElementById('type').value = ''
    document.getElementById('description').value = ''
}

function loadTasks (tasks = database.loadTasks()) {
    let listTask = document.getElementById('listTasks')
    listTask.innerHTML = ''

    tasks.forEach((task) => {
        let row = listTask.insertRow()

        row.insertCell(0).innerHTML = `${task.day}/${task.month}/${task.year}`

        row.insertCell(1).innerHTML = getTaskTypeName(task.type)
        row.insertCell(2).innerHTML = task.description

        let btn = document.createElement('button')
        btn.className = 'btn btn-danger'
        btn.id = task.id
        btn.innerHTML = 'Deletar'
        btn.onclick = () => {
            if (confirm('Você tem certeza que quer excluir esta tarefa?')){
                database.removeTask(task.id)
                loadTasks()
            }
        }

        row.insertCell(3).append(btn)
    })
}

function getTaskTypeName(type) {
    switch(type) {
        case '1':
            return 'Studies'        
        case '2':
            return 'Work'            
        case '3':
            return 'Home'            
        case '4':
            return 'Health'            
        case '5':
            return 'Family'            
        default:
            return 'Desconhecido'
    }
}

function searchTask() {
    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description)
    let tasks = database.searchTasks(task)

    loadTasks(tasks)
}

document.addEventListener('DOMContentLoaded', () => {
    if(document.body.contains(document.getElementById('listTasks'))) {
        loadTasks()
    }
})