import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../models/todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todoCorrente!: Todo;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  leggi(): void {
    alert(this.todoCorrente.testo);
  }

  edit(): void {
    console.log(this.todoCorrente);
    // console.log(this.getColore());
  }

  getColore() {
    if (this.todoCorrente.completed) {
      return 'green';
    } else {
      return 'red';
    }
  }

  rimuoviTodo() {
    this.todoService.deleteTodo(this.todoCorrente);
  }
}