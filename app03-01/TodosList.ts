import {Component, View, NgFor, NgIf} from 'angular2/angular2';
import {Todo} from 'Todo';
import {TodoItem} from 'TodoItem';

@Component({
  selector: 'todos-list',
  properties: ['todos']
})
@View({
  template: `
    <ul class="list-group">
      <div *ng-for="#todo of todos">
        <li *ng-if="todo.completed == false" class="list-group-item">
           <todo-item [todo]="todo" ></todo-item>
        </li>
      </div>
    </ul>
  `,
  directives: [NgFor, NgIf, TodoItem]
})
export class TodosList {
  todos: Array<Todo>;  
  constructor(){
  }
}