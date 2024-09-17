import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];
  newTodoTitle: string = '';
  newTodoDetails: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.createTodo({ title: this.newTodoTitle, details: this.newTodoDetails, completed: false })
        .subscribe(todo => {
          this.todos.push(todo);
          this.newTodoTitle = '';
          this.newTodoDetails = '';
        });
    }
  }

  updateTodoStatus(todo: any): void {
    this.todoService.updateTodo(todo)
      .subscribe();
  }
  
  deleteTodo(todoId: number): void {
    this.todoService.deleteTodo(todoId)
      .subscribe(() => {
        this.todos = this.todos.filter(todo => todo.id !== todoId);
      });
  }
}
