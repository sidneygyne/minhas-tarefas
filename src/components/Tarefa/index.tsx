import { useState } from 'react'
import {
  BarraAcoes,
  Botao,
  BotaoCancelarRemover,
  BotaoSalvar,
  Card,
  Descricao,
  Tag,
  Titulo
} from './styles'
import { Prioridade, Status } from '../../utils/enums/Tarefa'

type Props = {
  titulo: string
  prioridade: Prioridade
  status: Status
  descricao: string
}

export const Tarefa = ({ titulo, prioridade, status, descricao }: Props) => {
  const [estaEditando, setEstaEditando] = useState(false)

  return (
    <Card>
      <Titulo>{titulo}</Titulo>
      <Tag parametro="prioridade" prioridade={prioridade}>
        {prioridade}
      </Tag>
      <Tag parametro="status" status={status}>
        {status}
      </Tag>
      <Descricao value={descricao} />
      <BarraAcoes>
        {estaEditando ? (
          <>
            <BotaoSalvar>Salvar</BotaoSalvar>
            <BotaoCancelarRemover onClick={() => setEstaEditando(false)}>
              Cancelar
            </BotaoCancelarRemover>
          </>
        ) : (
          <>
            <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
            <BotaoCancelarRemover>Remover</BotaoCancelarRemover>
          </>
        )}
      </BarraAcoes>
    </Card>
  )
}
