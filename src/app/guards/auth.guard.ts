import { Usuario } from './../models/usuario.model';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authSerice: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    if (this.authSerice.usuarioLogado()) {
      debugger
      if (route.data) {
        let usuario: Usuario = JSON.parse(localStorage.getItem("Usuario"));
        if (route.data.perfil) {
          if (usuario.perfil == route.data.perfil) {
            return true;
          } else {
            this.router.navigate(["/nao-autorizado"]);
            return false;
          }
        }
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
