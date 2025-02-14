import React, { useState } from 'react';
import '../styles/Tabs.css'; // Importa o arquivo CSS para o estilo das abas

const Tabs = () => {
  // Cria o estado "activeTab" para controlar qual aba está ativa (inicialmente "sobre")
  const [activeTab, setActiveTab] = useState('sobre');

  // Função que renderiza o conteúdo com base na aba ativa
  const renderContent = () => {
    // Usa um switch para exibir conteúdo diferente conforme a aba ativa
    switch (activeTab) {
      case 'sobre':
        return <div className='container'>Atividade 7 - Praticando conceitos essenciais do ReactJS em 10 exercícios.</div>;
      case 'contato':
        return <div className='container'>Email: jpcruzcamargo@gmail.com</div>;
      default:
        return <div className='container'>Conteúdo da aba não encontrado</div>;
    }
  };

  return (
    <div>
      <h1>10. Componentes com Tabs Navegáveis</h1>
      
      {/* Exibe as abas, adicionando a classe "active" à aba ativa */}
      <div className="tabs">
        {/* Aba "Sobre", que fica ativa quando "activeTab" é "sobre" */}
        <div
          className={`tab ${activeTab === 'sobre' ? 'active' : ''}`} 
          onClick={() => setActiveTab('sobre')} // Altera a aba ativa para "sobre" quando clicada
        >
          Sobre
        </div>
        
        {/* Aba "Contato", que fica ativa quando "activeTab" é "contato" */}
        <div
          className={`tab ${activeTab === 'contato' ? 'active' : ''}`} 
          onClick={() => setActiveTab('contato')} // Altera a aba ativa para "contato" quando clicada
        >
          Contato
        </div>
      </div>

      {/* Exibe o conteúdo da aba ativa */}
      <div className="content">
        {renderContent()} {/* Chama a função renderContent() para mostrar o conteúdo correto */}
      </div>
    </div>
  );
};

export default Tabs;