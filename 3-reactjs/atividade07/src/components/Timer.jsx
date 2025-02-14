import { useState, useEffect } from 'react'; // Importa os hooks useState e useEffect

const Timer = () => {
  // Cria o estado "time" para armazenar o tempo (inicialmente 0)
  const [time, setTime] = useState(0);
  
  // Cria o estado "isRunning" para controlar se o temporizador está em execução
  const [isRunning, setIsRunning] = useState(false);

  // useEffect para gerenciar o intervalo e atualizar o tempo
  useEffect(() => {
    let interval;
    if (isRunning) {
      // Se o temporizador estiver rodando, cria um intervalo que atualiza o tempo a cada segundo (1000ms)
      interval = setInterval(() => {
        setTime((time) => time + 1); // Incrementa o tempo a cada segundo
      }, 1000);
    } else if (!isRunning && time !== 0) {
      // Se o temporizador não estiver rodando, limpa o intervalo (pausa)
      clearInterval(interval);
    }

    // Retorna uma função de limpeza que limpa o intervalo quando o componente for desmontado ou o estado mudar
    return () => clearInterval(interval);
  }, [isRunning]); // O efeito depende do estado "isRunning", ou seja, só é executado quando ele mudar

  // Função que pausa o temporizador
  const pause = () => setIsRunning(false);
  
  // Função que reinicia o temporizador (tempo volta a 0 e é pausado)
  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div className='container'>
      <h1>4. Temporizador com useEffect</h1>
      <div className="center">
        <p>Tempo: {time}s</p> {/* Exibe o tempo atual */}
        
        {/* Botão para alternar entre "Começar" e "Pausar" */}
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? 'Pausar' : 'Começar'}
        </button>
        
        {/* Botão para reiniciar o temporizador */}
        <button onClick={reset}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Timer;