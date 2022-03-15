import { Component, Input, OnInit } from '@angular/core';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-pokemon-alert',
  templateUrl: './pokemon-alert.component.html',
  styleUrls: ['./pokemon-alert.component.scss']
})
export class PokemonAlertComponent implements OnInit {

  @Input()
  alertCorrente!: Alert;

  constructor() { }

  ngOnInit(): void {
  }

}
