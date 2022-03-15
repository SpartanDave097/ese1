export interface Alert {
    tipo: string;
    infoStart?: string;
    infoAttacco?: {
        attaccante: string;
        attacco: string;
        critico: boolean;
        danni: number;
        target: string;
    }
    infoWin?: string;
}