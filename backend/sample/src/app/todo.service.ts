import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'http://localhost:8000/api/todos/'

  constructor(private http:HttpClient) { }

  
  getTodos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  updateTodo(todo: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}${todo.id}/`, todo);
  }

  deleteTodo(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${id}/`);
  }


}
