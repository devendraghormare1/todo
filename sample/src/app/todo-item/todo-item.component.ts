import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input() todo: any;

  constructor(private todoService: TodoService) { }

  updateTodoStatus(todo: any): void { 
    this.todoService.updateTodo(todo)
      .subscribe();
  }

  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
      .subscribe();
  }

}
