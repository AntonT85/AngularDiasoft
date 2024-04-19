import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth/auth-service";
import {of} from "rxjs";

export const AuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  if (isAuthenticated) return of(true);
  inject(Router).navigate(['']);
  return of(false);

}
