import { CadastroContatoComponent } from './components/cadastro-contato/cadastro-contato.component';
import { DetalhesContatoComponent } from './components/detalhes-contato/detalhes-contato.component';
import { ListarContatosComponent } from './components/listar-contatos/listar-contatos.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';

const contatosRoutes: Routes = [
    { path: '', component: ListarContatosComponent, canActivate: [AuthGuard] },
    { path: 'contatos/novo-contato', component: CadastroContatoComponent, data: { "perfil": "admin" }, canActivate: [AuthGuard] },
    { path: 'contatos/:id', component: DetalhesContatoComponent, canActivate: [AuthGuard] },
    { path: 'contatos/editar-contato/:id', component: CadastroContatoComponent, data: { "perfil": "admin" }, canActivate: [AuthGuard] },
]

@NgModule({
    imports: [RouterModule.forChild(contatosRoutes)],
    exports: [RouterModule]
})
export class ContatoRoutingModule { }