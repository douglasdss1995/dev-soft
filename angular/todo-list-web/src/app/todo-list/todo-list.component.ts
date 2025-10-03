import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TaskModel } from '../models/task.model';
import { TaskService } from '../services/task.service';

/**
 * Componente responsável por exibir e gerenciar a lista de tarefas (ToDo).
 * Permite criar, editar, excluir e marcar tarefas como concluídas.
 */
@Component({
  selector: 'app-todo-list',
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  /** Lista de tarefas exibidas no componente */
  public tasks: Array<TaskModel> = [];
  /** Mensagem de erro exibida em caso de falha nas operações */
  protected error = '';
  /** Nome da tarefa a ser criada ou editada */
  protected taskName = '';
  /** Tarefa selecionada para edição */
  protected task: TaskModel | undefined;

  /**
   * Injeta o serviço de tarefas.
   * @param taskService Serviço responsável pelas operações de CRUD de tarefas.
   */
  public constructor(private taskService: TaskService) {}

  /**
   * Método chamado na inicialização do componente.
   * Carrega a lista de tarefas.
   */
  public ngOnInit(): void {
    this.search();
  }

  /**
   * Exclui uma tarefa da lista.
   * @param task Tarefa a ser excluída.
   */
  public deleteTask(task: TaskModel) {
    this.taskService.deleteTask(task.id).subscribe();
    this.search();
  }

  /**
   * Alterna o status de conclusão de uma tarefa.
   * @param task Tarefa a ser atualizada.
   */
  public toggleTask(task: TaskModel) {
    task.concluida = !task.concluida;
    this.taskService.patchTask(task).subscribe();
    this.search();
  }

  /**
   * Busca todas as tarefas e atualiza a lista exibida.
   * Em caso de erro, exibe mensagem apropriada.
   */
  public search() {
    this.taskService.getTasks().subscribe({
      next: (data) => {
        this.tasks = data;
        this.task = undefined;
      },
      error: (err) => {
        this.error = 'Erro ao carregar tarefas: ' + err.message;
      },
    });
  }

  /**
   * Salva uma nova tarefa ou atualiza uma tarefa existente.
   * Valida se o nome da tarefa foi informado.
   */
  public saveTask() {
    if (this.task !== undefined) {
      // Atualiza tarefa existente
      this.task.nome = this.taskName;
      this.taskService.patchTask(this.task).subscribe(() => {
        this.taskName = '';
        this.search();
      });
    } else {
      // Verifica se o nome da tarefa foi informado
      // Caso não tenha sido informado, exibe mensagem de erro
      if (this.taskName === '') {
        this.error = 'Please, provide a task name';
        return;
      }

      // Cria nova tarefa vazia
      let task: TaskModel;
      // Preenche os dados da nova tarefa
      task = {
        id: 0,
        criado_em: new Date(),
        modificado_em: new Date(),
        nome: this.taskName,
        concluida: false,
      };

      // Salva a nova tarefa e atualiza a lista
      this.taskService.createTask(task).subscribe(() => {
        this.taskName = '';
        this.search();
      });
    }
  }

  /**
   * Preenche o campo de edição com os dados da tarefa selecionada.
   * @param task Tarefa a ser editada.
   */
  public fillEditField(task: TaskModel) {
    // Preenche o campo de edição com o nome da tarefa selecionada
    this.taskName = task.nome;
    // Define a tarefa selecionada para edição
    this.task = task;
  }
}
