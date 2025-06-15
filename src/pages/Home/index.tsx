import { BotaoAdicionar } from '../../components/BoataoAdicionar'
import { BarraLateral } from '../../containers/BarraLateral'
import { ListaDeTarefas } from '../../containers/ListaDeTarefas'

export const Home = () => (
  <>
    <BarraLateral />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)
