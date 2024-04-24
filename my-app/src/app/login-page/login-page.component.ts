import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth-service";
import {Store} from "@ngrx/store";
import {State} from "../store";
import {login} from "../store/auth/actions/auth-actions.actions";
import {isAuthenticated} from "../store/auth/selectors/auth-selectors.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  userLogin: any;
  userPassword: any;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService,
    private readonly store: Store<State>
  ) {
  }

  ngOnInit(): void {
    this.store.select(isAuthenticated).pipe(
      map((data) => {
        if (data) this.router.navigate(['courses']);
      })
    ).subscribe();
  }

  public login(myForm: any) {
    this.store.dispatch(login({email: myForm.value.userLogin, password: myForm.value.userPassword}))
  }
}
