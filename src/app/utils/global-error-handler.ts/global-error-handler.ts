import { Injector, Injectable } from '@angular/core';
import { ErrorLogService } from './../services/error-log.service';
import { ErrorHandler } from "../../../../node_modules/@angular/core";
import { ErrorLog } from '../../models/error.model';
import { HttpErrorResponse } from '../../../../node_modules/@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    public constructor(private errorLogService: ErrorLogService) {}

    public handleError(error: any): void {
        let errorLog: ErrorLog = new ErrorLog();
        if (error.stack) {
            errorLog.erro = error.stack;
        }
        if (error instanceof HttpErrorResponse) {
            errorLog.erro = JSON.stringify(error);
        }
        this.errorLogService.post(errorLog).subscribe();
    }

}