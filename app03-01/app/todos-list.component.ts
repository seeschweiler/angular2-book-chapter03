import {Component} from '@angular/core';
import {Todo} from './todo';
import {TodoItem} from './todo-item.component';

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
  `,
  directives: [TodoItem]
})
export class TodosList {
  todos: Array<Todo>;  
  constructor(){
  }
}