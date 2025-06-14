import React from 'react'
import { Container, EstiloGlobal } from './styles'
import { BarraLateral } from './containers/BarraLateral'
import { ListaDeTarefas } from './containers/ListaDeTarefas'
import { Provider } from 'react-redux'
import { store } from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <h1>Nova tarefa</h1>
  }
])

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </Provider>
  )
}

export default App
