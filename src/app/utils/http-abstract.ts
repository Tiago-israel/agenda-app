import { environment } from '../../environments/environment.prod';
import 'rxjs/add/operator/map'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export abstract class HttpAbstract<T>{

    protected _http: HttpClient;
    private baseUrl: string = environment.urlApi;
    private recurso: string;

    constructor(http: HttpClient, recurso: string) {
        this._http = http;
        this.recurso = recurso;
    }

    public getAll(): Observable<Array<T>> {
        return this._http.get<Array<T>>(`${this.baseUrl}/${this.recurso}`);
    }

    public get(id: string): Observable<T> {
        return this._http.get<T>(`${this.baseUrl}/${this.recurso}/${id}`);
    }

    public post(body: T): Observable<T> {
        return this._http.post<T>(`${this.baseUrl}/${this.recurso}`, body);
    }

    public put(id: string, body: T): Observable<T> {
        return this._http.put<T>(`${this.baseUrl}/${this.recurso}/${id}`, body);
    }

    public delete(id: string): Observable<any> {
        return this._http.delete<any>(`${this.baseUrl}/${this.recurso}/${id}`);
    }

}