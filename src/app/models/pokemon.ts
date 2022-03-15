

export interface Attack {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
}

export interface Weakness {
    type: string;
    value: string;
}

export interface Legalities {
    unlimited: string;
    expanded: string;
    standard: string;
}

export interface Images {
    symbol: string;
    logo: string;
}

export interface Set {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: Legalities;
    ptcgoCode: string;
    releaseDate: string;
    updatedAt: string;
    images: Images;
}

export interface Legalities2 {
    unlimited: string;
    expanded: string;
    standard: string;
}

export interface Images2 {
    small: string;
    large: string;
}

export interface Holofoil {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow: number;
}

export interface Normal {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow?: number;
}

export interface ReverseHolofoil {
    low: number;
    mid: number;
    high: number;
    market: number;
    directLow?: number;
}

export interface Prices {
    holofoil: Holofoil;
    normal: Normal;
    reverseHolofoil: ReverseHolofoil;
}

export interface Tcgplayer {
    url: string;
    updatedAt: string;
    prices: Prices;
}

export interface Prices2 {
    averageSellPrice: number;
    lowPrice: number;
    trendPrice: number;
    reverseHoloTrend: number;
    lowPriceExPlus: number;
    avg1: number;
    avg7: number;
    avg30: number;
    reverseHoloAvg1: number;
    reverseHoloAvg7: number;
    reverseHoloAvg30: number;
    reverseHoloSell?: number;
    reverseHoloLow?: number;
}

export interface Cardmarket {
    url: string;
    updatedAt: string;
    prices: Prices2;
}

export interface Resistance {
    type: string;
    value: string;
}

export interface Ability {
    name: string;
    text: string;
    type: string;
}

export interface Pokemon {
    id: string;
    name: string;
    supertype: string;
    subtypes: string[];
    hp: string;
    types: string[];
    evolvesFrom: string;
    rules: string[];
    attacks: Attack[];
    weaknesses: Weakness[];
    retreatCost: string[];
    convertedRetreatCost: number;
    set: Set;
    number: string;
    artist: string;
    rarity: string;
    nationalPokedexNumbers: number[];
    legalities: Legalities2;
    images: Images2;
    tcgplayer: Tcgplayer;
    cardmarket: Cardmarket;
    resistances: Resistance[];
    level: string;
    flavorText: string;
    abilities: Ability[];
    regulationMark: string;
    evolvesTo: string[];
    currentHP: number;
}

export interface RootObject {
    pokemonData: Pokemon[];
    page: number;
    pageSize: number;
    count: number;
    totalCount: number;
}