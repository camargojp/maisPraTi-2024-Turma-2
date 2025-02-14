import { useState, useEffect } from 'react' // Importa os hooks useState e useEffect

const BackgroundColorChange = () => {
  // Cria o estado "color" para armazenar a cor atual do fundo, com o valor inicial sendo branco
  const [color, setColor] = useState('#ffffff')

  // Função para gerar uma cor aleatória no formato hexadecimal
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`
    setColor(randomColor) // Atualiza o estado "color" com a cor gerada aleatoriamente
  }

  // O hook useEffect é usado para alterar a cor do fundo sempre que o estado "color" mudar
  useEffect(() => {
    document.body.style.backgroundColor = color // Modifica a cor de fundo da página
  }, [color]) // O efeito é executado sempre que o "color" mudar

  return (
    <div className='container'>
      <h1>2. Alteração de Cor de Fundo</h1>      
      <button onClick={generateRandomColor}>Mudar cor do Fundo</button> {/* Chama a função para gerar uma nova cor */}
    </div>
  )
}

export default BackgroundColorChange