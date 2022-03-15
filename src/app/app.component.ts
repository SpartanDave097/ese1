import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-todo';

  visualizzaArena: boolean = true;
  visualizzaLista: boolean = false;

  listaOff(): void {
    this.visualizzaLista = false;
  }

  arenaOff(): void {
    this.visualizzaArena = false;
  }
}

