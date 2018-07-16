import { ErrorLogService } from './utils/services/error-log.service';
import { NotFoundComponent } from './utils/not-found/not-fount.component';
import { LoadingIndicatorModule } from './utils/loading-indicator/loading-indicator.module';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';


import { AppComponent } from './app.component';
import { ContatoModule } from './contatos/contato.module';
import { GlobalErrorHandler } from './utils/global-error-handler.ts/global-error-handler';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './utils/http-interceptor/interceptor';
import { MessageService } from '../../node_modules/primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    HttpClientModule,
    LoadingIndicatorModule,
    GrowlModule,
    AppRoutingModule
  ],
  providers: [
    ErrorLogService,
    MessageService,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
