import { LoadingIndicatorModule } from './../utils/loading-indicator/loading-indicator.module';
import { CadastroContatoComponent } from './components/cadastro-contato/cadastro-contato.component';
import { TelefoneService } from './services/telefone.service';
import { DetalhesContatoComponent } from './components/detalhes-contato/detalhes-contato.component';
import { NgModule } from '@angular/core';
import { ListarContatosComponent } from './components/listar-contatos/listar-contatos.component';
import { CommonModule } from "@angular/common";
import { ContatoService } from './services/contato.service';
import { ContatoRoutingModule } from './contato.routing';
import {FormsModule} from "@angular/forms"
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    declarations: [
      ListarContatosComponent,
      DetalhesContatoComponent,
      CadastroContatoComponent,
    ],
    imports: [
      CommonModule,
      FormsModule,
      LoadingIndicatorModule,
      ContatoRoutingModule,
      TextMaskModule
    ],
    providers: [
      ContatoService,
      TelefoneService
    ],
    exports:[
      ListarContatosComponent
    ]
  })
  export class ContatoModule { }
  