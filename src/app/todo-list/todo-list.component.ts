import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: Todo[] = [];
  @Output() deleteTodo = new EventEmitter<number>();
  @Output() toogleCompleted = new EventEmitter<number>();

  onDeleteTodo(taskId: number) {
    this.deleteTodo.emit(taskId);
  }

  onToogleCompleted(taskId: number) {
    this.toogleCompleted.emit(taskId);
  }
}
