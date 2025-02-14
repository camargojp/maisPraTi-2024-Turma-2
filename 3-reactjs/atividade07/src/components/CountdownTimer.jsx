import { useState, useEffect } from 'react' // Importa os hooks useState e useEffect

const CountdownTimer = () => {
  // Cria o estado "seconds" para armazenar o tempo restante do contador
  const [seconds, setSeconds] = useState(0)
  // Cria o estado "isActive" para saber se o timer está ativo ou não
  const [isActive, setIsActive] = useState(false)
  // Cria o estado "isPaused" para controlar o estado de pausa do timer
  const [isPaused, setIsPaused] = useState(false)

  // useEffect que controla a contagem regressiva
  useEffect(() => {
    let timer
    // Se o timer estiver ativo e o tempo for maior que 0, começa a contagem regressiva
    if (isActive && seconds > 0) {
      timer = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1) // Decrementa o contador a cada segundo
      }, 1000)
    } 
    // Se o tempo chegar a 0, exibe um alerta e desativa o timer
    else if (seconds === 0 && isActive) {
      alert('O tempo acabou!')
      setIsActive(false)
    }

    // Limpa o intervalo quando o componente é desmontado ou quando o timer é pausado ou reiniciado
    return () => clearInterval(timer)
  }, [isActive, seconds]) // O efeito depende de "isActive" e "seconds"

  // Função para iniciar o timer, se o tempo for maior que 0
  const startTimer = () => {
    if (seconds > 0) {
      setIsActive(true) // Ativa o timer
      setIsPaused(false) // Desmarca o estado de pausa
    }  
  }

  // Função para pausar o timer
  const pauseTimer = () => {
    setIsActive(false) // Desativa o timer
    setIsPaused(true)  // Marca o timer como pausado
  }

  // Função para reiniciar o timer
  const resetTimer = () => {
    setIsActive(false) // Desativa o timer
    setSeconds(0)      // Reseta o tempo para 0
    setIsPaused(false) // Reseta o estado de pausa
  }

  return (
    <div className='container'>
      <h1>9. Timer com Intervalo e Alerta</h1>
      <input 
        type="number" 
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))} // Atualiza o valor de "seconds" com a entrada do usuário
        disabled={isActive} // Desabilita a edição do tempo enquanto o timer estiver ativo
      />
      <div>
        {/* Botão para iniciar o timer */}
        <button onClick={startTimer} disabled={isActive || seconds <= 0}>Iniciar</button>
        {/* Botão para pausar o timer */}
        <button onClick={pauseTimer} disabled={!isActive}>Pausar</button>
        {/* Botão para reiniciar o timer */}
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
      <div>
        {/* Exibe o estado do timer com base em "isActive" e "isPaused" */}
        {isActive ? (
          <h3>Tempo restante: {seconds} segundos</h3>
        ) : (
          <h3>{isPaused ? 'Timer pausado' : 'Timer pronto para iniciar'}</h3>
        )}
      </div>
    </div>
  )
}

export default CountdownTimer