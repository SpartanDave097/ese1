import { Component, Input, OnInit } from '@angular/core';
import { Weakness } from '../models/pokemon';

@Component({
  selector: 'app-pokemon-debolezze',
  templateUrl: './pokemon-debolezze.component.html',
  styleUrls: ['./pokemon-debolezze.component.scss']
})
export class PokemonDebolezzeComponent implements OnInit {

  @Input()
  debolezze!: Weakness

  constructor() { }

  ngOnInit(): void {
  }

}
