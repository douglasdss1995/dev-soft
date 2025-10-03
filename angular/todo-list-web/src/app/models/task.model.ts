import {BaseModel} from './base.model';

export interface TaskModel extends BaseModel {
  nome: string;
  concluida: boolean;
}
