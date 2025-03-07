import React from "react"
import Conteudo from "./components/conteudo"
import MeuBotao from "./components/meubotao"
import Contador from "./components/contador"
import MinhaLista from "./components/minhalista"
import Filter from "./components/filter"

function App() {

  return (
    <>
      {/* <h1>Conteudo</h1>
      <Conteudo />

      <h1>Props</h1>
      <div>
        <MeuBotao msg='Clique aqui' />
        <MeuBotao msg='Depois aqui' />
        <MeuBotao msg='Agora aqui' />
      </div>

      <h1>Contador</h1>
      <Contador /> */}

      {/* <h1>Listas no React</h1>
      <MinhaLista /> */}

      <h1>Efeito colateral em react: useEffect</h1>
      <Filter/>
    </>
  )
}

export default App
