import { Component, OnInit } from '@angular/core';
import I_AggACarrello from '../models/I_AggACarrello';
import Prodotto from '../models/Prodotto';
import Servizio from '../models/Servizio';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrls: ['./carrello.component.scss']
})
export class CarrelloComponent implements OnInit {
  items: I_AggACarrello[] = [];

  constructor() { }

  ngOnInit(): void {
    let p1= new Prodotto("scarpe nike","vecchie ma usate poco",true);
    let s1= new Servizio("garanzia","31/12/2022");
    this.addItem(p1);
    this.addItem(s1);
  }

  addItem(item: I_AggACarrello){
    this.items?.push(item);
  }

}
