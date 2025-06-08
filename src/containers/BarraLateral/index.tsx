import { FiltroCard } from '../../components/FiltroCard'
import { Aside, Campo, Filtros } from './styles'

export const BarraLateral = () => (
  <Aside>
    <div>
      <Campo type="text" placeholder="Buscar" />
      <Filtros>
        <FiltroCard legenda="pedentes" contador={1} ativo={false} />
        <FiltroCard legenda="concluídas" contador={2} ativo={false} />
        <FiltroCard legenda="urgentes" contador={3} ativo={false} />
        <FiltroCard legenda="importantes" contador={4} ativo={false} />
        <FiltroCard legenda="normal" contador={5} ativo={false} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </Filtros>
    </div>
  </Aside>
)
