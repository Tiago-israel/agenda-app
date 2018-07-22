import { HttpAbstract } from "../../utils/http-abstract";
import { Telefone } from "../../models/telefone.model";
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class TelefoneService extends HttpAbstract<Telefone>{

    constructor(private http: HttpClient) {
        super(http, "Telefones");
    }
}