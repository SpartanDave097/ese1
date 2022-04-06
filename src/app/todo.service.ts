import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiBaseUrl: string = "https://jsonplaceholder.typicode.com/";

  constructor(private http: HttpClient) { }

  getDataOra() {
    return new Date();
  }

  // getTodos(): Todo[] {
  //   const todo1: Todo = {
  //     id: 1,
  //     titolo: "Fare la spesa",
  //     testo: "Ricordati tutto",
  //     completato: false
  //   }

  //   const todo2: Todo = {
  //     id: 2,
  //     titolo: "Portare fuori il cane",
  //     testo: "Attenzione al cane di via Roma",
  //     completato: false
  //   }

  //   const todo3: Todo = {
  //     id: 3,
  //     titolo: "Bere la birra",
  //     testo: "Con moderazione",
  //     completato: false
  //   }

  //   const todo4: Todo = {
  //     id: 4,
  //     titolo: "Bomba",
  //     testo: "maldive",
  //     completato: false
  //   }

  //   return [todo1, todo2, todo3, todo4];
  // }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiBaseUrl + "users/1/todos");
  }

  getTodoById(id: string): Observable<Todo> {
    // https://jsonplaceholder.typicode.com/todos/21
    return this.http.get<Todo>(this.apiBaseUrl + "todos/" + id);
  }

  salvaTodo(todo: Todo) {
    return this.http.post<Todo>(this.apiBaseUrl + "todos/", todo);
  }

  deleteTodo(todo: Todo) {
    return this.http.delete(this.apiBaseUrl + "todos/");
  }
}