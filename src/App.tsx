import React from 'react'
import { Container, EstiloGlobal } from './styles'
import { BarraLateral } from './containers/BarraLateral'
import { ListaDeTarefas } from './containers/ListaDeTarefas'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </>
  )
}

export default App
