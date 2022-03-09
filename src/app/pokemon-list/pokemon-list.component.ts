import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import data from '../pokemons.json';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    this.pokemons = data.data;
  }

}
