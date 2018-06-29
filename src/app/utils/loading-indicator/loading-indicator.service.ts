import { Injectable } from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoadingIndicatorService {
    private _loaderStatusSubject = new BehaviorSubject<boolean>(false);
    
    loaderStatus$ = this._loaderStatusSubject.asObservable();

    public show() {
        this._loaderStatusSubject.next(true);
    }

    public hide() {
        this._loaderStatusSubject.next(false);
    }
}
