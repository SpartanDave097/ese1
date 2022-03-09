import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoComponent,
    TodoEditComponent,
    PokemonComponent,
    PokemonListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
