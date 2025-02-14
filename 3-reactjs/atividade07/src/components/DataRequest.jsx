import React, { useState, useEffect } from 'react';

function Posts() {
  // Estado para armazenar os posts, o estado de carregamento e erro
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Função para fazer a requisição de dados
  const fetchPosts = async () => {
    setLoading(true);
    setError(null); // Limpa qualquer erro anterior
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Erro ao carregar posts');
      }
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Efeito que é disparado na primeira renderização do componente
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="posts">
      <h1>7. Aplicação de Requisição de Dados Simples</h1>
      {/* Botão para recarregar os dados */}
      <button onClick={fetchPosts} disabled={loading}>
        {loading ? 'Carregando...' : 'Recarregar Posts'}
      </button>

      {/* Indicador de carregamento */}
      {loading && <p>Carregando...</p>}

      {/* Exibição de erro */}
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}

      {/* Lista de posts, limitada a 5 */}
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
        {posts.length === 0 && <p>Nenhum post disponível.</p>}
      </ul>
    </div>
  );
}

export default Posts;
