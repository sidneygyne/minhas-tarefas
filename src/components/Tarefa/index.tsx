import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  BarraAcoes,
  Botao,
  BotaoCancelarRemover,
  Card,
  Descricao,
  Tag,
  Titulo
} from './styles'
import { remover, editar } from '../../store/reducers/tarefas'
import { TarefaClass } from '../../models/Tarefa'
import { BotaoSalvar } from '../../styles'

type Props = TarefaClass

export const Tarefa = ({
  titulo,
  prioridade,
  status,
  descricao: descricaoOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [descricao, setDescricao] = useState('')

  useEffect(() => {
    if (descricaoOriginal.length > 0) {
      setDescricao(descricaoOriginal)
    }
  }, [descricaoOriginal])

  function cancelarEdicao() {
    setEstaEditando(false)
    setDescricao(descricaoOriginal)
  }

  function salvarEdicao() {
    dispatch(
      editar({
        titulo,
        prioridade,
        status,
        descricao,
        id
      })
    )
    setEstaEditando(false)
  }

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao
        disabled={!estaEditando}
        value={descricao}
        onChange={(evento) => setDescricao(evento.target.value)}
      />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar onClick={salvarEdicao}>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={cancelarEdicao}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover onClick={() => dispatch(remover(id))}>
              Remover
            </BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}
