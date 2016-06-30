import { Component } from '@angular/core';
import { Todo, TodoService } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'todo-search',
  styleUrls: ['todo-search.component.css'],
  templateUrl: 'todo-search.component.html'
})
export class TodoSearchComponent {
  newItem: string;

  constructor (private todoService: TodoService) {}

  addItem () {
    this.todoService.emit(<Todo>{ label: this.newItem });
    this.newItem = '';
  }
}

