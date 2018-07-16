import { Http } from '@angular/http';
import { Injectable } from "@angular/core";
import { HttpAbstract } from "../../utils/http-abstract";
import { Telefone } from "../../models/telefone.model";
import { HttpClient } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class TelefoneService extends HttpAbstract<Telefone>{

    constructor(private http: HttpClient) {
        super(http, "Telefones");
    }
}