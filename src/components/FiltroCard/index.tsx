import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Card, Contador, Label } from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import * as unums from '../../utils/enums/Tarefa'

export type Props = {
  legenda: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: unums.Prioridade | unums.Status
}

export const FiltroCard = ({ legenda, criterio, valor }: Props) => {
  const dispatch = useDispatch()
  const { filtro, tarefas } = useSelector((state: RootReducer) => state)

  const verificaEstaAtivo = () => {
    const mesmoCriterio = filtro.criterio === criterio
    const mesmoValor = filtro.valor === valor

    return mesmoCriterio && mesmoValor
  }

  const contarTarefas = () => {
    if (criterio === 'todas') return tarefas.itens.length
    if (criterio === 'prioridade') {
      return tarefas.itens.filter((item) => item.prioridade === valor).length
    }
    if (criterio === 'status') {
      return tarefas.itens.filter((item) => item.status === valor).length
    }
  }

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio,
        valor
      })
    )
  }

  const ativo = verificaEstaAtivo()
  const contador = contarTarefas()

  return (
    <Card ativo={ativo} onClick={filtrar}>
      <Contador>{contador}</Contador>
      <Label>{legenda}</Label>
    </Card>
  )
}
