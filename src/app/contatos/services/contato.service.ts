import { Contato } from '../../models/contato.model';
import { Injectable } from "@angular/core";
import { HttpAbstract } from "../../utils/http-abstract";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ContatoService extends HttpAbstract<Contato>{
    
    constructor(http:HttpClient){
        super(http,"Contatos");
    }
}