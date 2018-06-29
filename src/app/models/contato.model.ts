import { Telefone } from './telefone.model';

export class Contato {
    id: string;
    nome: string;
    email: string;
    telefones: Array<Telefone> = new Array<Telefone>();
}