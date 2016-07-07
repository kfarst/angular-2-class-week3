import { Component, ViewChild } from '@angular/core';
import { TodoInputComponent } from '../todo-input/todo-input.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { Todo } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TodoListComponent, TodoInputComponent]
})
export class AppComponent {
  @ViewChild (TodoListComponent)
  todoList: TodoListComponent;

  title = 'todos';

  addItemToList (item: Todo) {
    this.todoList.items.push(item);
  }
}
