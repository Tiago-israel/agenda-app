import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { MessageService } from 'primeng/components/common/messageservice';
import { Usuario } from '../models/usuario.model';
import { Injectable } from "@angular/core";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    public constructor(
        private messageService: MessageService,
        private router: Router,
        private http: HttpClient
    ) { }

    public cadastro(usuario: Usuario): boolean {
        try {
            localStorage.setItem("Usuario", JSON.stringify(usuario));
            return true;
        } catch (error) {
            return false;
        }
    }

    public login(usuario: Usuario): boolean {
        let usuarios = [];
        this.buscarUsuariosMok().subscribe(
            (data) => {
                usuarios = data;
                let usuarioGravado: Usuario = usuarios.find(x => x.login == usuario.login && x.senha == usuario.senha);
                if (usuarioGravado) {
                    localStorage.setItem("Usuario", JSON.stringify({ "login": usuarioGravado.login, "perfil": usuarioGravado.perfil }));
                    localStorage.setItem("claims", JSON.stringify(usuarioGravado.claims));
                    this.messageService.add({ severity: 'success', summary: 'Sucesso !', detail: `${usuarioGravado.login} logado com sucesso!` });
                    this.router.navigate(['/contatos']);
                    return true;
                } else {
                    this.messageService.add({ severity: 'error', summary: 'Falha na operação', detail: 'Usuário ou senha incorretos!' });
                }
            }
        )
        return false;
    }

    public logout(): void {
        localStorage.removeItem("Usuario");
        localStorage.removeItem("claims");
    }

    public usuarioLogado(): boolean {
        let usuario = localStorage.getItem("Usuario");
        return usuario != null && usuario != undefined;
    }

    private buscarUsuariosMok(): Observable<Array<Usuario>> {
        return this.http.get<Array<Usuario>>(`assets/mok/users.json`);
    }
}