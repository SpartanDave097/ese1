import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todos';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  @Input()
  todoDaMod: Todo = {titolo:"",testo:"",completato: false}
  constructor() { }

  ngOnInit(): void {
  }

  salva():void{

  }
}
