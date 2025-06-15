import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { BotaoSalvar, Campo, MainContainer, Titulo } from '../../styles'
import { Form, Opcao, Opcoes } from './styles'
import { Prioridade, Status } from '../../utils/enums/Tarefa'
import { cadastar } from '../../store/reducers/tarefas'

export const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [titulo, setTitulo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [prioridade, setPrioridade] = useState(Prioridade.NORMAL)

  const cadastarTarefa = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(
      cadastar({
        titulo,
        prioridade,
        descricao,
        status: Status.PENDENTE
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Nova tarefa</Titulo>
      <Form onSubmit={cadastarTarefa}>
        <Campo
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
          type="text"
          placeholder="Título"
        />
        <Campo
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
          as="textarea"
          placeholder="Descrição da tarefa"
        ></Campo>
        <Opcoes>
          <p>Prioridade</p>
          {Object.values(Prioridade).map((prioridade) => (
            <Opcao key={prioridade}>
              <input
                onChange={(evento) =>
                  setPrioridade(evento.target.value as Prioridade)
                }
                value={prioridade}
                name="prioridade"
                type="radio"
                id={prioridade}
                defaultChecked={prioridade === Prioridade.NORMAL}
              />{' '}
              <label htmlFor={prioridade}>{prioridade}</label>
            </Opcao>
          ))}
        </Opcoes>
        <BotaoSalvar type="submit">Cadastrar</BotaoSalvar>
      </Form>
    </MainContainer>
  )
}
