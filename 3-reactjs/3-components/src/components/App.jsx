function Button(props) {
  return <button onClick={props.onCLick}>Clique aqui!</button>
}

function App() {

  const handleCLick = () => {
    alert("Botão clicado!")
  }
  
  return (
    <>
      <Button onCLick={handleCLick}/>
    </>
  )
}

export default App