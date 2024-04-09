import {inject} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from "../services/auth/auth-service";

export const AuthGuard = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).isAuthenticated();


}
