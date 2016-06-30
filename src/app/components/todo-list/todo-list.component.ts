import { Component, OnInit, OnDestroy, ViewChildren, QueryList } from '@angular/core';
import { Todo, TodoService } from '../../services/todo-service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  styleUrls: ['todo-list.component.css'],
  directives: [TodoItemComponent],
  templateUrl: 'todo-list.component.html'
})
export class TodoListComponent implements OnInit, OnDestroy {
  @ViewChildren(TodoItemComponent)
  componentList: QueryList<TodoItemComponent>;

  items: Todo[] = [];

  constructor (private todoService: TodoService) { }

  ngOnInit () {
    this
    .todoService
    .subscribe(todo => {
      todo.completed = false;
      this.items.push(todo);
    });
  }

  destroyItem (index) {
    this.items.splice(index, 1);
  }

  ngOnDestroy () {
    this.todoService.unsubscribe();
  }
}
