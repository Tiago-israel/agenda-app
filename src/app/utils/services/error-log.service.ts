import { Injectable } from "../../../../node_modules/@angular/core";
import { HttpAbstract } from "../http-abstract";
import { ErrorLog } from "../../models/error.model";
import { HttpClient } from "../../../../node_modules/@angular/common/http";

@Injectable()
export class ErrorLogService extends HttpAbstract<ErrorLog>{
    constructor(http: HttpClient) {
        super(http, "ErrorLog");
    }
}