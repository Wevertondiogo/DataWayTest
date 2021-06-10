export interface Cities {
    id: number;
    nome: string;
    microrregiao?: {
            id: number;
            mesorregiao: {
                UF: {
                    id: number;
                    nome: string;
                }
            }
        }
}