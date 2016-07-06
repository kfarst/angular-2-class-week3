import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  styleUrls: ['todo-item.component.css'],
  templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent {
  @Input() item: Todo;
  @Output() destroyItem = new EventEmitter();

  toggle () {
    this.item.completed = true;

    setTimeout(() => {
      this.destroyItem.emit('');
    }, 1000);
  }
}
