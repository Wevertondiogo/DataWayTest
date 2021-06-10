export interface States {
    id:  number;
    nome: string;
    regiao: {
        id: number;
        nome: string;
        regiao: object;
        sigla: string;
    
    }
    sigla: string;
}