import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonArenaComponent } from './pokemon-arena/pokemon-arena.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/todos', pathMatch: 'full'
  },
  {
    path: 'todos', component: TodosComponent
  },
  {
    path: 'todos/:id', component: TodoEditComponent
  },
  {
    path: 'todos/edit/:id', component: TodoEditComponent
  },
  {
    path: 'pokemons', component: PokemonListComponent
  },
  {
    path: 'arena', component: PokemonArenaComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
