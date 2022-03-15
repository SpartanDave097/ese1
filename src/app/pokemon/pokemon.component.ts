import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Attack, Pokemon } from '../models/pokemon';
import data from '../pokemons.json'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() //fa si che la variabile sia valorizzata dall'esterno di questo file
  pokemon!: Pokemon;

  @Input()
  arenaOn: boolean = false;

  @Input()
  toccaAMe: boolean = false;
  
  @Output()
  onAttacco = new EventEmitter<Attack>();

  constructor() { }

  ngOnInit(): void {
    
  }

  attacca(attacco: Attack) {
    this.onAttacco.emit(attacco);
  }

}
