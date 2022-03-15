import { Component, Input, OnInit } from '@angular/core';
import { Attack } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-attacco',
  templateUrl: './pokemon-attacco.component.html',
  styleUrls: ['./pokemon-attacco.component.scss']
})
export class PokemonAttaccoComponent implements OnInit {
  
  @Input()
  attacco!: Attack

  constructor() { }

  ngOnInit(): void {
  }

}
