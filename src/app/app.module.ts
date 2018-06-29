import { NotFoundComponent } from './utils/not-found/not-fount.component';
import { LoadingIndicatorModule } from './utils/loading-indicator/loading-indicator.module';
import { AppRoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContatoModule } from './contatos/contato.module';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    ContatoModule,
    HttpModule,
    LoadingIndicatorModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
