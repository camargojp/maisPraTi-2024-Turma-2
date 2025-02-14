import { useState } from "react"; // Importa o hook useState para gerenciar o estado

const ListFilter = () => {
  // Cria o estado "names", que armazena a lista original de nomes
  const [names] = useState(['Luffy', 'Zoro', 'Nami', 'Sanji', 'Usopp', 
    'Chopper', 'Robin', 'Franky', 'Brook', 'Jinbe']);
  
  // Cria o estado "filter", que armazena o valor do campo de busca
  const [filter, setFilter] = useState('');

  // Filtra os nomes que incluem o valor da busca (ignorando maiúsculas/minúsculas)
  const filteredNames = names.filter(name => 
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container">
      <h1>5. Filtro de Lista</h1>
      
      {/* Campo de entrada para filtrar os nomes */}
      <input 
        type="text" 
        value={filter} // Valor do campo de busca é controlado pelo estado "filter"
        onChange={(e) => setFilter(e.target.value)} // Atualiza o valor de "filter" conforme o usuário digita
        placeholder="Filtrar nomes" // Texto exibido no campo quando ele está vazio
      />
      
      {/* Exibe a lista filtrada com base no valor de "filter" */}
      <ul>
        {filteredNames.map((name, index) => (
          <li key={index}>{name}</li> // Mapeia os nomes filtrados e os exibe como itens de lista
        ))}
      </ul>
    </div>
  );
}

export default ListFilter;