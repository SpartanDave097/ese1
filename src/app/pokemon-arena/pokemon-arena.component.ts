import { Component, OnInit } from '@angular/core';
import data from '../pokemons.json';
import { Attack, Pokemon, Weakness } from '../models/pokemon';
import { Alert } from '../models/alert';

@Component({
  selector: 'app-pokemon-arena',
  templateUrl: './pokemon-arena.component.html',
  styleUrls: ['./pokemon-arena.component.scss']
})
export class PokemonArenaComponent implements OnInit {

  pokemons: any[] = [];

  selectedP1: any = "";
  selectedP2: any = "";

  scontroStarted: boolean = false;

  toccaAP1: boolean = false;
  toccaAP2: boolean = false;

  alerts: Alert[] = [];

  constructor() { }

  ngOnInit(): void {
    this.pokemons = data.data;
  }

  setPokemon(selectedPokemon: Pokemon) {
    selectedPokemon.currentHP = parseInt(selectedPokemon.hp);
  }

  eseguiAttacco(attacco: Attack, attaccante: Pokemon, target: Pokemon) {
    let danni: number = parseInt(attacco.damage.replace("+", "").replace("x", "").trim());
    let cM: { risposta: boolean, extra?: string } = this.attaccoCritico(attacco.cost, target.weaknesses);
    let schivata: number = Math.floor(Math.random() * 100);

    if (schivata > 10) {
      if (cM.risposta == true && cM.extra != undefined) {
        if (cM.extra.includes('×')) {
          let extraDamage: number = parseInt(cM.extra.replace("×", "").trim());
          danni = danni * extraDamage;
        }
        else if (cM.extra.includes('+')) {
          let extraDamage: number = parseInt(cM.extra.replace("+", "").trim());
          danni = danni + extraDamage;
        }
      }
    }
    else {
      danni = 0;
    }
    target.currentHP = target.currentHP - danni;

    this.toccaAP1 = !this.toccaAP1;
    this.toccaAP2 = !this.toccaAP2;

    let alertAttack: Alert = { tipo: 'attack', infoAttacco: { attaccante: attaccante.name, attacco: attacco.name, critico: cM.risposta, danni: danni, target: target.name } };
    this.alerts.push(alertAttack);

    if (target.currentHP <= 0) {
      let alertWin: Alert = { tipo: 'win', infoWin: attaccante.name };
      this.alerts.push(alertWin);
    }
  }

  attaccoCritico(attackTypes: string[], debolezze: Weakness[]): { risposta: boolean, extra?: string } {
    for (let d of debolezze) {
      for (let at of attackTypes) {
        if (at == d.type) {
          return { risposta: true, extra: d.value };
        }
      }
    }
    return { risposta: false };
  }

  start() {
    let coin: number = this.flipCoin();
    if (coin == 0) {
      this.toccaAP1 = true;
      let alertStart: Alert = { tipo: 'start', infoStart: this.selectedP1.name };
      this.alerts.push(alertStart);
    }
    else if (coin == 1) {
      this.toccaAP2 = true;
      let alertStart: Alert = { tipo: 'start', infoStart: this.selectedP2.name };
      this.alerts.push(alertStart);
    }
    this.scontroStarted = true;
  }

  end() {
    this.scontroStarted = false;
    this.selectedP1 = "";
    this.selectedP2 = "";
    this.toccaAP1 = false;
    this.toccaAP2 = false;
    this.alerts = [];
  }

  flipCoin(): number {
    return Math.floor(Math.random() * 2);
  }

}
