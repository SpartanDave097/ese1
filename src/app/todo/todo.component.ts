import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todos';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() //scrivendo input prima, 
  todo!: Todo ; //passeremo quella variabile anche all'esterno del component

  constructor() { }

  ngOnInit(): void {
  }

}
