import {Component, signal} from '@angular/core';
import {TodoListComponent} from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  imports: [TodoListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-web');
}
