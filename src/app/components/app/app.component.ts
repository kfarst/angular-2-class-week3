import { Component, ViewChild } from '@angular/core';
import { TodoSearchComponent } from '../todo-search/todo-search.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoService } from '../../services/todo-service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [TodoService],
  directives: [TodoListComponent, TodoSearchComponent]
})
export class AppComponent {
  title = 'todos';
}
