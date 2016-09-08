import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTodo } from './add-todo.component';
import { TodoItem } from './todo-item.component';
import { TodosList } from './todos-list.component';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ AddTodo, TodoItem, TodosList ],
  exports:      [ AddTodo, TodosList ]
})
export class TodosModule { }
