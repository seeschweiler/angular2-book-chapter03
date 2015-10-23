/// <reference path="typings/angular2/angular2.d.ts" />

import {Component, View, bootstrap} from 'angular2/angular2';
import {TodosList} from 'TodosList';
import {AddTodo} from 'AddTodo';
import {Todo} from 'Todo';

@Component({
   selector: 'my-app'
})
@View({
   template: `
     <h4>Todos List</h4>
     <h5>Number of Todos: <span class="badge">{{todos.length}}</span></h5>
     <todos-list [todos]="todos"></todos-list>
     <add-todo [todos]="todos"></add-todo>
   `,
   directives: [TodosList, AddTodo]
})
class MyApp {
   todos: Array<Todo>;
   constructor() {
     this.todos = [
       new Todo("My Todo Item 1", "My Todo 1 Description", "Sebastian"),
       new Todo("My Todo Item 2", "My Todo 2 Description", "Sebastian"),
       new Todo("My Todo Item 3", "My Todo 3 Description", "Sebastian")
     ];
   }
}

bootstrap(MyApp);