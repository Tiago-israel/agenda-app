import { Contato } from '../../models/contato.model';
import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { HttpAbstract } from "../../utils/http-abstract";

@Injectable()
export class ContatoService extends HttpAbstract<Contato>{
    
    constructor(http:Http){
        super(http,"Contatos");
    }
}