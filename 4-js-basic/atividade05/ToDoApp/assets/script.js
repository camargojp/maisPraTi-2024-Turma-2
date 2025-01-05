// Função para carregar as tarefas do localStorage
function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'bg-white', 'p-2', 'rounded', 'shadow', 'mb-2');
        
        if (task.completed) {
            li.classList.add('line-through', 'text-gray-500');
        }

        // Criar o ícone de círculo
        const circle = document.createElement('span');
        circle.classList.add('w-6', 'h-6', 'border-2', 'rounded-full', 'flex', 'items-center', 'justify-center', 'mr-4', 'cursor-pointer');
        
        // Se a tarefa estiver completa, mostra a imagem do "check"
        if (task.completed) {
            circle.innerHTML = `<img src="assets/images/checked.png" alt="Check" class="w-7 h-">`;
        } else {
            circle.classList.add('bg-transparent');
        }

        // Adiciona o clique para alternar o estado de checked/unchecked
        circle.onclick = function() {
            toggleComplete(index);
        };

        li.appendChild(circle);

        // Adiciona o texto da tarefa
        const taskText = document.createElement('span');
        taskText.textContent = task.text;
        li.appendChild(taskText);

        // Adiciona os botões para editar, excluir
        const actionButtons = document.createElement('div');
        actionButtons.innerHTML = `
            <button onclick="editTask(${index})" class="bg-yellow-500 text-white p-1 rounded mr-2">Editar</button>
            <button onclick="deleteTask(${index})" class="bg-red-500 text-white p-1 rounded">Excluir</button>
        `;
        li.appendChild(actionButtons);

        taskList.appendChild(li);
    });
}

// Função para adicionar uma nova tarefa
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Por favor, insira uma tarefa!');
        return;
    }

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push({ text: taskText, completed: false });
    localStorage.setItem('tasks', JSON.stringify(tasks));

    taskInput.value = ''; 
    loadTasks();
}

// Função para editar uma tarefa
function editTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const newText = prompt('Edite a tarefa:', tasks[index].text);

    if (newText !== null && newText.trim() !== '') {
        tasks[index].text = newText.trim();
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

// Função para excluir uma tarefa com confirmação
function deleteTask(index) {    
    const confirmDelete = confirm('Tem certeza que deseja excluir esta tarefa?');

    // Se o usuário clicar confirmar, exclui a tarefa
    if (confirmDelete) {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        loadTasks();
    }
}

// Função para marcar/desmarcar como concluída
function toggleComplete(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks[index].completed = !tasks[index].completed;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    loadTasks();
}

// Carrega as tarefas quando a página for carregada
window.onload = loadTasks;
