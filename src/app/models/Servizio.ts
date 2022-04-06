import I_AggACarrello from "./I_AggACarrello";

export default class Servizio implements I_AggACarrello{
    constructor(
        public tipologia: string="",
         public scadenza:string= "",
         public nome: string="",
         public prezzo: number=0,
         public quantita: number=0
         ) {
        
    }

}