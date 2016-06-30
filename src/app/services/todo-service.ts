import { Injectable, EventEmitter } from '@angular/core';

export interface Todo {
  label: string,
  completed: boolean
}

@Injectable()
export class TodoService extends EventEmitter<Todo> { }
