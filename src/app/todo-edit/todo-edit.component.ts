import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  @Input()
  todoDaModificare: Todo = { id: 0, title: "", testo: "", completed: false };

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);

    this.todoService.getTodoById(id!).subscribe(t => this.todoDaModificare = t);

  }

  salva(): void {
    this.todoService.salvaTodo(this.todoDaModificare);

    this.router.navigate(['todos']);
  }
}
