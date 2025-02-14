import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Contador</Link></li>
        <li><Link to="/background-changer">Alteração de Cor de Fundo</Link></li>
        <li><Link to="/todo-list">Lista de Tarefas</Link></li>
        <li><Link to="/timer">Temporizador</Link></li>
        <li><Link to="/list-filter">Filtro de Lista</Link></li>
        <li><Link to="/registration-form">Formulário de Registro</Link></li>
        <li><Link to="/post-list">Lista de Posts</Link></li>
        <li><Link to="/image-gallery">Galeria de Imagens</Link></li>
        <li><Link to="/countdown-timer">Timer com Intervalo</Link></li>
        <li><Link to="/tabs">Componentes com Tabs</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;