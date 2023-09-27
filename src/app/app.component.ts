import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Todo } from './model/todo.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoList: Todo[] = [];

  onTodoAdded(todoItem: Todo) {
    this.todoList.push(todoItem);
  }

  onDeleteTask(taskId: number) {
    this.todoList = this.todoList.filter((task) => task.id !== taskId);
  }

  toggleCompletedTodo(taskId: number) {
    const newList = this.todoList.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
  }
}
