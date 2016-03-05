import {Component} from 'angular2/core';

import {TodosList} from './todos-list.component';
import {AddTodo} from './add-todo.component';
import {Todo} from './todo';

@Component({
   selector: 'my-app',
   template: `
     <h4>Todos List</h4>
     <h5>Number of Todos: <span class="badge">{{todos.length}}</span></h5>
     <todos-list [todos]="todos"></todos-list>
     <add-todo [todos]="todos"></add-todo>
   `,
   directives: [TodosList, AddTodo]
})
export class AppComponent {
   todos: Array<Todo>;
   constructor() {
     this.todos = [
       new Todo("My Todo Item 1", "My Todo 1 Description", "Sebastian"),
       new Todo("My Todo Item 2", "My Todo 2 Description", "Sebastian"),
       new Todo("My Todo Item 3", "My Todo 3 Description", "Sebastian")
     ];
   }
}