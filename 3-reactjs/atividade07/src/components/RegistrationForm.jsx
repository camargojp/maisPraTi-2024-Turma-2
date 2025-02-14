import { useState } from "react"; // Importa o hook useState para gerenciar os estados

const RegistrationForm = () => {
  // Cria os estados para armazenar os valores dos campos de entrada
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(''); // Estado para armazenar mensagens de feedback

  // Função que será chamada quando o formulário for enviado
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão de envio do formulário (recarga da página)
    
    // Verifica se todos os campos estão preenchidos
    if (name && email && password) {
      setMessage(`Bem-vindo, ${name}!`); // Exibe uma mensagem de boas-vindas se todos os campos estiverem preenchidos
    } else {
      setMessage('Por favor, preencha todos os campos.'); // Solicita o preenchimento de todos os campos se algum estiver vazio
    }
  };

  return (
    <div className="container">
      <h1>6. Formulário de Registro Simples</h1>
      <form onSubmit={handleSubmit}>
        {/* Campo para inserir o nome, atualiza o estado "name" */}
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Nome" 
        />
        
        {/* Campo para inserir o email, atualiza o estado "email" */}
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="E-mail" 
        />
        
        {/* Campo para inserir a senha, atualiza o estado "password" */}
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Senha" 
        />
        
        {/* Botão para enviar o formulário */}
        <button type="submit">Registrar</button>
      </form>
      
      {/* Exibe a mensagem de feedback se o estado "message" tiver algum valor */}
      {message && <p>{message}</p>}
    </div>
  );
}

export default RegistrationForm;