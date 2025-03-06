import React from "react"
import Conteudo from "./components/conteudo"
import MeuBotao from "./components/meubotao"

function App() {
  return (
    <>
      <h1>Projeto React</h1>
      <Conteudo />
      <div>
        <MeuBotao msg='Clique aqui' />
        <MeuBotao msg='Depois aqui' />
        <MeuBotao msg='Agora aqui' />
      </div>
    </>
  )
}

export default App
