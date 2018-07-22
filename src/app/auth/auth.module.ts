import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CadastroUsuarioComponent } from './components/cadastro/cadastro-usuario.component';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './components/login/auth.component';
import { AuthService } from './auth.service';
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        AuthComponent,
        CadastroUsuarioComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        AuthService
    ],
    exports:[
        AuthComponent,
        CadastroUsuarioComponent
    ]
})
export class AuthModule {}