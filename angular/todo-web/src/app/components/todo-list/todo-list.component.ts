import {Component, OnInit} from '@angular/core';
import {TaskModel} from '../../models/todo.model';
import {TaskService} from '../../services/task/task.service';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  tasks: TaskModel[] = [];
  newTaskText: string = '';

  constructor(private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  loadTasks(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if (this.newTaskText.trim() === '') {
      return;
    }

    this.taskService.addTask(this.newTaskText);
    this.newTaskText = '';
    this.loadTasks();
  }

  toggleTaskCompletion(task: TaskModel): void {
    task.completed = !task.completed;
    this.taskService.updateTask(task);
    this.loadTasks();
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
    this.loadTasks();
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.addTask();
    }
  }
}
