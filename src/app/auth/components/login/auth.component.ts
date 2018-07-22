import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../../../models/usuario.model';
import { AuthService } from '../../auth.service';
@Component({
    selector: 'auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

    public usuario: Usuario = new Usuario();

    public constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    public ngOnInit(): void {

    }

    public login(): void {
       this.authService.login(this.usuario);
    }

    public logout(): void {
    }


}