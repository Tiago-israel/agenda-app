import { Usuario } from '../../../models/usuario.model';
import { Component,OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
    selector: 'cadastro-usuario',
    templateUrl: './cadastro-usuario.component.html',
    styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario = new Usuario();

    public constructor(private authService: AuthService) { }

    public ngOnInit(): void {

    }

    public cadastrarUsuario() {
        this.authService.cadastro(this.usuario);
    }


}