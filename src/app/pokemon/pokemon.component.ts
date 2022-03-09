import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import data from '../pokemons.json'

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  @Input() //fa si che la variabile sia valorizzata dall'esterno di questo file
  pokemon!: Pokemon;

  constructor() { }

  ngOnInit(): void {
    
  }

}
