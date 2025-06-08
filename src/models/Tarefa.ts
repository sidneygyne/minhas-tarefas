import { Prioridade, Status } from '../utils/enums/Tarefa'

// export class Tarefa {
//   titulo: string
//   prioridade: Prioridade
//   status: Status
//   descricao: string
//   id: number

//   constructor(
//     titulo: string,
//     prioridade: Prioridade,
//     status: Status,
//     descricao: string,
//     id: number
//   ) {
//     this.titulo = titulo
//     this.prioridade = prioridade
//     this.status = status
//     this.descricao = descricao
//     this.id = id
//   }
// }

// versao simplificada:

export class Tarefa {
  constructor(
    public titulo: string,
    public prioridade: Prioridade,
    public status: Status,
    public descricao: string,
    public id: number
  ) {}
}
