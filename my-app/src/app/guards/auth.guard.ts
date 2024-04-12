import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth/auth-service";

export const AuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const isAuthenticated = inject(AuthService).isAuthenticated();
  if (isAuthenticated) return true;
  inject(Router).navigate(['']);
  return false;

}
