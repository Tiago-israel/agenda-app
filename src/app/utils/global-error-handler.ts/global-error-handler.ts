import { MessageService } from 'primeng/components/common/messageservice';
import { Injector, Injectable } from '@angular/core';
import { ErrorLogService } from '../services/error-log.service';
import { ErrorHandler } from "@angular/core";
import { ErrorLog } from '../../models/error.model';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    public constructor(
        private errorLogService: ErrorLogService,
        private messageService: MessageService
    ) { }

    public handleError(error: any): void {
        debugger
        let errorLog: ErrorLog = new ErrorLog();
        if (error.stack) {
            errorLog.erro = error.stack;
            this.messageService.add({ severity: 'error', summary: 'erro interno', detail: `${error.stack}` });
        }
        if (error instanceof HttpErrorResponse) {
            errorLog.erro = JSON.stringify(error);
        }
        //this.errorLogService.post(errorLog).subscribe();
    }

}