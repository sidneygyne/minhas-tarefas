import { useSelector } from 'react-redux'
import { Tarefa } from '../../components/Tarefa'
import { Prioridade, Status } from '../../utils/enums/Tarefa'
import { Container } from './styles'
import { RootReducer } from '../../store'

const tarefas = [
  {
    titulo: 'Estudar TypeScript',
    descricao: 'Ver aula 10 do curso',
    prioridade: Prioridade.IMPORTANT,
    status: Status.PENDENTE
  },
  {
    titulo: 'Revisar JavaScript',
    descricao: 'Praticar funções e arrays',
    prioridade: Prioridade.NORMAL,
    status: Status.PENDENTE
  },
  {
    titulo: 'Atualizar currículo',
    descricao: 'Incluir experiência com React',
    prioridade: Prioridade.URGENT,
    status: Status.PENDENTE
  },
  {
    titulo: 'Fazer exercícios de lógica',
    descricao: 'Resolver 5 desafios do HackerRank',
    prioridade: Prioridade.IMPORTANT,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Ler artigo sobre Clean Code',
    descricao: 'Artigo recomendado na aula 12',
    prioridade: Prioridade.NORMAL,
    status: Status.PENDENTE
  },
  {
    titulo: 'Criar projeto com TypeScript',
    descricao: 'Iniciar com configuração do tsconfig',
    prioridade: Prioridade.URGENT,
    status: Status.PENDENTE
  },
  {
    titulo: 'Organizar pastas do projeto',
    descricao: 'Separar componentes e estilos',
    prioridade: Prioridade.NORMAL,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Instalar dependências',
    descricao: 'Instalar React, Vite e TypeScript',
    prioridade: Prioridade.IMPORTANT,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Fazer backup dos arquivos',
    descricao: 'Usar GitHub e drive externo',
    prioridade: Prioridade.URGENT,
    status: Status.PENDENTE
  },
  {
    titulo: 'Enviar e-mail de feedback',
    descricao: 'Responder professor sobre o progresso',
    prioridade: Prioridade.NORMAL,
    status: Status.PENDENTE
  },
  {
    titulo: 'Testar componente de botão',
    descricao: 'Verificar comportamento com props',
    prioridade: Prioridade.IMPORTANT,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Planejar tarefas da semana',
    descricao: 'Organizar no Trello',
    prioridade: Prioridade.NORMAL,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Participar da live de dúvidas',
    descricao: 'Segunda-feira às 20h',
    prioridade: Prioridade.URGENT,
    status: Status.PENDENTE
  },
  {
    titulo: 'Atualizar README do projeto',
    descricao: 'Incluir instruções de instalação',
    prioridade: Prioridade.IMPORTANT,
    status: Status.CONCLUIDA
  },
  {
    titulo: 'Estudar testes com Jest',
    descricao: 'Assistir tutorial no YouTube',
    prioridade: Prioridade.NORMAL,
    status: Status.PENDENTE
  }
]

export const ListaDeTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tarefas marcadas como:</p>
      <ul>
        {tarefas.map((t) => (
          <li key={t.titulo}>
            <Tarefa
              descricao={t.descricao}
              titulo={t.titulo}
              status={t.status}
              prioridade={t.prioridade}
            />
          </li>
        ))}
      </ul>
    </Container>
  )
}
