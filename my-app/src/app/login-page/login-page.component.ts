import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../services/auth/auth-service";

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
    private readonly authService: AuthService) {
  }

  public login(myForm: any) {
    this.authService.login(myForm.value.userLogin, myForm.value.userPassword).subscribe(() => {
        if (this.authService.isAuthenticated()) {
          console.log("Выполнен вход в систему");
          this.router.navigate(['courses']);
        }
      }
    );
  }
}
