import {Component} from '@angular/core';
import {Todo} from './shared/todo.model';

@Component({
  selector: 'todos-list',
  inputs: ['todos'],
  template: `
    <ul class="list-group">
      <div *ngFor="let todo of todos">
        <li *ngIf="todo.completed == false" class="list-group-item">
           <todo-item [todo]="todo" ></todo-item>
        </li>
      </div>
    </ul>
  `
})
export class TodosList {
  todos: Array<Todo>;
  constructor(){
  }
}
