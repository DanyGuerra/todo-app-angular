import {
  Component,
  EventEmitter,
  Output,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css'],
})
export class TodoFormComponent implements OnInit {
  @Output() todoAdded = new EventEmitter<Todo>();
  @Input() todoList: Todo[] = [];
  todoText: string = '';

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('OnInit called');
  }

  onTodo() {
    if (!this.todoText) {
      return;
    }
    const todoLenght: number = this.todoList.length;
    this.todoAdded.emit(new Todo(todoLenght + 1, this.todoText, false));
    this.todoText = '';
  }
}
