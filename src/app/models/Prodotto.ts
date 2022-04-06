import I_AggACarrello from "./I_AggACarrello";

export default class Prodotto implements I_AggACarrello{

    constructor(
        public t: string = "",
        public des: string = "",
        public inMag: boolean = false,
        public nome: string = "",
        public prezzo: number=0,
        public quantita: number=0){}


    /*     
    
    constructor(public t: string,public des: string,public inMag: boolean){
    }
    
    corrisponde a scrivere:

    titolo!: string;
    descrizione!: string;
    inMagazzino!: boolean;

    constructor(t: string,des: string,inMag: boolean){
        this.titolo = t;
        this.descrizione=des ;
        this.inMagazzino=inMag ;
    }
    */

    // con questo costruttore invece inizializziamo anche a dei dati default


}