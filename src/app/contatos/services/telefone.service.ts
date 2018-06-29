import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { HttpAbstract } from "../../utils/http-abstract";
import { Telefone } from "../../models/telefone.model";

@Injectable()
export class TelefoneService extends HttpAbstract<Telefone>{

    constructor(private http: Http) {
        super(http, "Telefones");
    }
}