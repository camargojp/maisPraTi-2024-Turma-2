import { useState } from 'react' // Importa o hook useState para gerenciar o estado
import '../styles/Counter.css' // Importa o arquivo de estilos para o componente

const Counter = () => {
  // Cria o estado "count" e a função "setCount" para atualizar o valor
  const [count, setCount] = useState(0)

  // Função para incrementar o valor do contador
  const increase = () => setCount(count + 1)

  // Função para decrementar o valor do contador, com verificação para não ser negativo
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1) // Decrementa o contador apenas se o valor for maior que 0
    }
  }

  return (
    <div className='container'>
      <h1>1. Contador Simples</h1>      
      <p>Contador: {count}</p> {/* Exibe o valor atual do contador */}
      <button onClick={increase}>Incrementar</button> {/* Chama a função para incrementar */}
      <button onClick={decrease}>Decrementar</button> {/* Chama a função para decrementar */}
    </div>
  )
}

export default Counter