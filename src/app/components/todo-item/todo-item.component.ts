import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'todo-item',
  styleUrls: ['todo-item.component.css'],
  templateUrl: 'todo-item.component.html'
})
export class TodoItemComponent {
  editMode = false;

  @Input() item: Todo;
  @Output() destroyItem = new EventEmitter();

  toggle () {
    this.item.completed = true;

    setTimeout(() => {
      this.destroyItem.emit('');
    }, 1000);
  }

  enterEditMode(element: HTMLInputElement) {
    this.editMode = true;
    if (this.editMode) {
      setTimeout(() => { element.focus(); }, 0);
    }
  }

  cancelEdit(element: HTMLInputElement) {
    this.editMode = false;
    element.value = this.item.label;
  }

  commitEdit(updatedText: string) {
    this.editMode = false;
    this.item.label = updatedText;
  }
  
  confirmDestroy (evt) {
    if (confirm('Are you sure you want to delete this item?')) {
      this.destroyItem.emit('');
    } else {
      evt.preventDefault();
    }
  }
}
