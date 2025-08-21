import {Injectable} from '@angular/core';
import {TaskModel} from '../../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly STORAGE_KEY = 'tasks';

  constructor() {
  }

  getTasks(): TaskModel[] {
    const tasksJson = localStorage.getItem(this.STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  }

  saveTasks(tasks: TaskModel[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
  }

  addTask(text: string): TaskModel {
    const newTask: TaskModel = {
      id: this.generateId(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };

    const tasks = this.getTasks();
    tasks.push(newTask);
    this.saveTasks(tasks);

    return newTask;
  }

  updateTask(task: TaskModel): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      tasks[index] = task;
      this.saveTasks(tasks);
    }
  }

  deleteTask(id: string): void {
    const tasks = this.getTasks();
    const filteredTasks = tasks.filter(task => task.id !== id);
    this.saveTasks(filteredTasks);
  }

  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }
}
