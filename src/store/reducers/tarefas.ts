import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TarefaClass } from '../../models/Tarefa'
import { Prioridade, Status } from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: TarefaClass[]
}

const initialState: TarefasState = {
  itens: [
    {
      titulo: 'Estudar TypeScript',
      prioridade: Prioridade.IMPORTANT,
      status: Status.PENDENTE,
      descricao: 'Ver aula 10 do curso',
      id: 1
    },
    {
      titulo: 'Revisar JavaScript',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Praticar funções e arrays',
      id: 2
    },
    {
      titulo: 'Atualizar currículo',
      prioridade: Prioridade.URGENT,
      status: Status.PENDENTE,
      descricao: 'Incluir experiência com React',
      id: 3
    },
    {
      titulo: 'Fazer exercícios de lógica',
      prioridade: Prioridade.IMPORTANT,
      status: Status.CONCLUIDA,
      descricao: 'Resolver 5 desafios do HackerRank',
      id: 4
    },
    {
      titulo: 'Ler artigo sobre Clean Code',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Artigo recomendado na aula 12',
      id: 5
    },
    {
      titulo: 'Criar projeto com TypeScript',
      prioridade: Prioridade.URGENT,
      status: Status.PENDENTE,
      descricao: 'Iniciar com configuração do tsconfig',
      id: 6
    },
    {
      titulo: 'Organizar pastas do projeto',
      prioridade: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      descricao: 'Separar componentes e estilos',
      id: 7
    },
    {
      titulo: 'Instalar dependências',
      prioridade: Prioridade.IMPORTANT,
      status: Status.CONCLUIDA,
      descricao: 'Instalar React, Vite e TypeScript',
      id: 8
    },
    {
      titulo: 'Fazer backup dos arquivos',
      prioridade: Prioridade.URGENT,
      status: Status.PENDENTE,
      descricao: 'Usar GitHub e drive externo',
      id: 9
    },
    {
      titulo: 'Enviar e-mail de feedback',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Responder professor sobre o progresso',
      id: 10
    },
    {
      titulo: 'Testar componente de botão',
      prioridade: Prioridade.IMPORTANT,
      status: Status.CONCLUIDA,
      descricao: 'Verificar comportamento com props',
      id: 11
    },
    {
      titulo: 'Planejar TarefaClasss da semana',
      prioridade: Prioridade.NORMAL,
      status: Status.CONCLUIDA,
      descricao: 'Organizar no Trello',
      id: 12
    },
    {
      titulo: 'Participar da live de dúvidas',
      prioridade: Prioridade.URGENT,
      status: Status.PENDENTE,
      descricao: 'Segunda-feira às 20h',
      id: 13
    },
    {
      titulo: 'Atualizar README do projeto',
      prioridade: Prioridade.IMPORTANT,
      status: Status.CONCLUIDA,
      descricao: 'Incluir instruções de instalação',
      id: 14
    },
    {
      titulo: 'Estudar testes com Jest',
      prioridade: Prioridade.NORMAL,
      status: Status.PENDENTE,
      descricao: 'Assistir tutorial no YouTube',
      id: 15
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = [
        ...state.itens.filter((tarefa) => tarefa.id !== action.payload)
      ]
    },
    editar: (state, action: PayloadAction<TarefaClass>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions
export default tarefasSlice.reducer
