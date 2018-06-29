import { CadastroContatoComponent } from './components/cadastro-contato/cadastro-contato.component';
import { DetalhesContatoComponent } from './components/detalhes-contato/detalhes-contato.component';
import { ListarContatosComponent } from './components/listar-contatos/listar-contatos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

const contatosRoutes: Routes = [
    { path: '', component: ListarContatosComponent, children:[] },
    { path: 'contatos', component: ListarContatosComponent },
    { path: 'contatos/novo-contato', component: CadastroContatoComponent },
    { path: 'contatos/:id', component: DetalhesContatoComponent },
    { path: 'contatos/editar-contato/:id', component: CadastroContatoComponent },
]

@NgModule({
    imports: [RouterModule.forChild(contatosRoutes)],
    exports: [RouterModule]
})
export class ContatoRoutingModule { }