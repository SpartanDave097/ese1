import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  nome: string = "";

  todo1:Todo = {
    titolo: "todo",
    testo: "Fare la spesa",
    completato: false
  }

  todo2:Todo = {
    titolo: "todo",
    testo: "Portare fuori il cane",
    completato: false
  }

  todo3:Todo = {
    titolo: "todo",
    testo: "Dare da mangiare al gatto",
    completato: false
  }

  todos = [this.todo1,this.todo2,this.todo3]

  constructor() { }

  ngOnInit(): void {
  }

}
