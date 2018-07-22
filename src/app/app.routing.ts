import { NaoAutorizadoComponent } from './utils/nao-autorizado/nao-autorizado.component';
import { AuthGuard } from './guards/auth.guard';
import { CadastroUsuarioComponent } from './auth/components/cadastro/cadastro-usuario.component';
import { AuthComponent } from './auth/components/login/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './utils/not-found/not-fount.component';
const appRoutes: Routes = [
    {
        path: 'novo-usuario',
        component: CadastroUsuarioComponent
    },
    {
        path: 'login',
        component: AuthComponent
    },
    {
        path: 'nao-autorizado',
        component: NaoAutorizadoComponent
    },
    {
        path: 'contatos',
        loadChildren: 'app/contatos/contato.module#ContatoModule',
    },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }