import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Tarefa } from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar TypeScript',
      Prioridade.IMPORTANT,
      Status.PENDENTE,
      'Ver aula 10 do curso',
      1
    ),
    new Tarefa(
      'Revisar JavaScript',
      Prioridade.NORMAL,
      Status.PENDENTE,
      'Praticar funções e arrays',
      2
    ),
    new Tarefa(
      'Atualizar currículo',
      Prioridade.URGENT,
      Status.PENDENTE,
      'Incluir experiência com React',
      3
    ),
    new Tarefa(
      'Fazer exercícios de lógica',
      Prioridade.IMPORTANT,
      Status.CONCLUIDA,
      'Resolver 5 desafios do HackerRank',
      4
    ),
    new Tarefa(
      'Ler artigo sobre Clean Code',
      Prioridade.NORMAL,
      Status.PENDENTE,
      'Artigo recomendado na aula 12',
      5
    ),
    new Tarefa(
      'Criar projeto com TypeScript',
      Prioridade.URGENT,
      Status.PENDENTE,
      'Iniciar com configuração do tsconfig',
      6
    ),
    new Tarefa(
      'Organizar pastas do projeto',
      Prioridade.NORMAL,
      Status.CONCLUIDA,
      'Separar componentes e estilos',
      7
    ),
    new Tarefa(
      'Instalar dependências',
      Prioridade.IMPORTANT,
      Status.CONCLUIDA,
      'Instalar React, Vite e TypeScript',
      8
    ),
    new Tarefa(
      'Fazer backup dos arquivos',
      Prioridade.URGENT,
      Status.PENDENTE,
      'Usar GitHub e drive externo',
      9
    ),
    new Tarefa(
      'Enviar e-mail de feedback',
      Prioridade.NORMAL,
      Status.PENDENTE,
      'Responder professor sobre o progresso',
      10
    ),
    new Tarefa(
      'Testar componente de botão',
      Prioridade.IMPORTANT,
      Status.CONCLUIDA,
      'Verificar comportamento com props',
      11
    ),
    new Tarefa(
      'Planejar tarefas da semana',
      Prioridade.NORMAL,
      Status.CONCLUIDA,
      'Organizar no Trello',
      12
    ),
    new Tarefa(
      'Participar da live de dúvidas',
      Prioridade.URGENT,
      Status.PENDENTE,
      'Segunda-feira às 20h',
      13
    ),
    new Tarefa(
      'Atualizar README do projeto',
      Prioridade.IMPORTANT,
      Status.CONCLUIDA,
      'Incluir instruções de instalação',
      14
    ),
    new Tarefa(
      'Estudar testes com Jest',
      Prioridade.NORMAL,
      Status.PENDENTE,
      'Assistir tutorial no YouTube',
      15
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
