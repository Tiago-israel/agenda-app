import { AuthGuard } from './guards/auth.guard';
import { AuthModule } from './auth/auth.module';
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
import { MessageService } from 'primeng/components/common/messageservice';
import {GrowlModule} from 'primeng/growl';
import { NaoAutorizadoComponent } from './utils/nao-autorizado/nao-autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NaoAutorizadoComponent
  ],
  imports: [
    AuthModule,
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
    AuthGuard,
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
