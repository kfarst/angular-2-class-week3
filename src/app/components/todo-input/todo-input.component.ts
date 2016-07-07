import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'todo-input',
  styleUrls: ['todo-input.component.css'],
  templateUrl: 'todo-input.component.html'
})
export class TodoInputComponent {
  newItem: string;
  @Output() itemAdded = new EventEmitter<Todo>();

  addItem () {
    this.itemAdded.emit(<Todo>{ label: this.newItem, completed: false });
    this.newItem = '';
  }
}

