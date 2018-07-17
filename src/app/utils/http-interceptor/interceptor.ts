import { LoadingIndicatorService } from "../loading-indicator/loading-indicator.service";
import { Injectable, Injector } from '@angular/core'
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/finally';
import { Observable } from "rxjs/Observable";
import { MessageService } from 'primeng/components/common/messageservice';


@Injectable()
export class Interceptor implements HttpInterceptor {

    public constructor(
        private loadingService: LoadingIndicatorService,
        private messageService: MessageService
    ) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();
        return next
            .handle(req)
            .do((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {

                }
            }).catch((response: any) => {
                this.loadingService.hide();
                if (response instanceof HttpErrorResponse) {
                    this.tratarErrosHttp(response);
                }
                return Observable.throw(response);
            }).finally(() => {
                this.loadingService.hide();
            });
    }


    private tratarErrosHttp(erro: HttpErrorResponse): void {
        switch (erro.status) {
            case 400:
                this.messageService.add({ severity: 'error', summary: 'Falha na operação', detail: erro.message ? erro.error : 'Erro ao processar a requisição!' });
                break;
            case 404:
                this.messageService.add({ severity: 'error', summary: 'Falha na operação', detail:erro.message ? erro.error : 'Recurso não encontrado!' });
                break;
            case 500:
                this.messageService.add({ severity: 'error', summary: 'Falha na operação', detail:erro.message ? erro.error : 'Erro no servidor, tente novamente!' })
                break;
            default:
                this.messageService.add({ severity: 'error', summary: 'Falha na operação', detail: 'Erro no servidor, tente novamente!' })
                break;
        }
    }
}