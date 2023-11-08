import { Genero } from "./genero.model";

export interface Filme{
    FilmeID: number;
    Nome: string;
    Classif_ind: number;
    Ano_lanc: number;
    Alugado: boolean;
    Genero?: Genero;
    GeneroID: number;
}