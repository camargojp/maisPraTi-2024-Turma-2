import React, { useState } from 'react'; // Importa o React e o hook useState

function App() {
  // Estado para armazenar a lista de tarefas
  const [tasks, setTasks] = useState([]);
  
  // Estado para armazenar o texto da nova tarefa a ser inserida
  const [taskInput, setTaskInput] = useState('');
  
  // Estado para controlar o filtro de exibição das tarefas (todas, concluídas ou pendentes)
  const [filter, setFilter] = useState('all'); 

  // Função para adicionar uma nova tarefa à lista
  const addTask = () => {
    if (taskInput.trim() === '') return; // Não adiciona tarefas vazias
    const newTask = {
      id: Date.now(), // Usando Date.now() para garantir um id único
      text: taskInput, // Texto da tarefa
      completed: false, // A tarefa começa como não concluída
    };
    setTasks([...tasks, newTask]); // Adiciona a nova tarefa na lista de tarefas
    setTaskInput(''); // Limpa o campo de entrada após adicionar a tarefa
  };

  // Função para remover uma tarefa da lista
  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); // Remove a tarefa com o id especificado
  };

  // Função para marcar uma tarefa como concluída ou não
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task // Alterna o estado "completed" da tarefa
      )
    );
  };

  // Filtra as tarefas com base no estado do filtro (todas, concluídas ou pendentes)
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true; // Se o filtro for "todas", retorna todas as tarefas
    if (filter === 'completed') return task.completed; // Filtra as tarefas concluídas
    if (filter === 'pending') return !task.completed; // Filtra as tarefas pendentes
    return true;
  });

  return (
    <div className="app">
      <h1>3. Lista de Tarefas</h1>
      
      {/* Campo de entrada para digitar uma nova tarefa */}
      <input
        type="text"
        value={taskInput} // O valor é controlado pelo estado "taskInput"
        onChange={(e) => setTaskInput(e.target.value)} // Atualiza o estado "taskInput" quando o valor mudar
        placeholder="Digite uma tarefa"
      />
      
      {/* Botão para adicionar a nova tarefa */}
      <button onClick={addTask}>Adicionar Tarefa</button>

      {/* Botões para alternar entre os filtros */}
      <div>
        <button onClick={() => setFilter('all')}>Todas</button>
        <button onClick={() => setFilter('completed')}>Concluídas</button>
        <button onClick={() => setFilter('pending')}>Pendentes</button>
      </div>

      {/* Lista de tarefas filtradas e exibidas */}
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>
            {/* Exibe o texto da tarefa, riscando se a tarefa estiver concluída */}
            <span
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }} // Risca o texto se a tarefa estiver concluída
              onClick={() => toggleComplete(task.id)} // Marca a tarefa como concluída ou não quando clicada
            >
              {task.text}
            </span>
            {/* Botão para remover a tarefa */}
            <button onClick={() => removeTask(task.id)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;