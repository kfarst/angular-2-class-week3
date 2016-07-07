import { Component, ViewChildren, QueryList } from '@angular/core';
import { Todo } from '../../services/todo-service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  styleUrls: ['todo-list.component.css'],
  directives: [TodoItemComponent],
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent {
  @ViewChildren(TodoItemComponent)
  componentList: QueryList<TodoItemComponent>;

  items: Todo[] = [];

  destroyItem (index) {
    this.items.splice(index, 1);
  }
}
