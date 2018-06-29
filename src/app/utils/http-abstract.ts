import { environment } from './../../environments/environment.prod';
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'

export abstract class HttpAbstract<T>{

    protected _http: Http;
    private baseUrl: string = environment.urlApi;
    private recurso: string;

    constructor(http: Http, recurso: string) {
        this._http = http;
        this.recurso = recurso;
    }

    public getAll(): Observable<Array<T>> {
        return this._http.get(`${this.baseUrl}/${this.recurso}`).map(response => response.json());
    }

    public get(id: string): Observable<T> {
        return this._http.get(`${this.baseUrl}/${this.recurso}/${id}`).map(response => response.json());
    }

    public post(body: T): Observable<T> {
        return this._http.post(`${this.baseUrl}/${this.recurso}`, body).map(response => response.json());;
    }

    public put(id: string, body: T): Observable<T> {
        return this._http.put(`${this.baseUrl}/${this.recurso}/${id}`, body).map(response => response.json());;
    }

    public delete(id: string): Observable<any> {
        return this._http.delete(`${this.baseUrl}/${this.recurso}/${id}`);
    }

}