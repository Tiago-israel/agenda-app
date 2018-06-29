import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './utils/not-found/not-fount.component';
const appRoutes: Routes = [
    {
        path: '',
        loadChildren: 'app/contatos/contato.module#ContatoModule'
    },
    { path: '**', component: NotFoundComponent }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }