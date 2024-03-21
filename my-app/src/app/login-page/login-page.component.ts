import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.less']
})
export class LoginPageComponent {
  @Output() userData: EventEmitter<{}> = new EventEmitter<{}>();
  userLogin: any;
  userPassword: any;

  public login() {
    this.userData.emit({login: this.userLogin, password: this.userPassword})
  }
}
