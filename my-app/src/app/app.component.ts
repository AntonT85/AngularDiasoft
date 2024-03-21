import {Component} from '@angular/core';
import {AuthService} from "./services/auth/auth-service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';

  constructor(private readonly authService: AuthService) {
  }

  public isAuthenticated: boolean = false;

  public onLogging(userData: any) {
    this.authService.login(userData.login, userData.password);
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log("Выполнен вход в систему");
  }
}
