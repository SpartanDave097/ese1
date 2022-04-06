import { Component, OnInit } from '@angular/core';
import Servizio from '../models/Servizio';
import { Todo } from '../models/todos';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  nome: string = "";
  indexTodo!: number;
  todoSelezionato!: Todo;
  todos: Todo[] = [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void {
    this.caricaTodos();
  }

  caricaTodos() {
    this.todoService.getTodos().subscribe(t => {
      console.log(t);
      this.todos = t;
    });
  }

  saluta(chi: string, numeroDiVolte: number): void {
    for (let i = 0; i < numeroDiVolte; i++) {
      console.log(`ciao ${chi}`);
    }

  }

  somma(n1: any, n2: number): any {
    return n1 + n2;
  }

  editTodo() {
    this.todoSelezionato = this.todos[this.indexTodo];
    console.log(this.todoSelezionato);
  }

}

