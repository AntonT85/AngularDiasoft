import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  public login(login: string, password: string): string {
    localStorage.setItem("userData", JSON.stringify({login: login, password: password}));
    const token = "1";
    localStorage.setItem("access_token", token);
    return token;
  }

  public logout(): void {
    console.log("Выход " + this.GetUserInfo());
    localStorage.removeItem("userData");
    localStorage.removeItem("access_token");
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem("userData") != null;
  }

  public GetUserInfo(): string | null {
    let data = localStorage.getItem("userData");
    if (data) {
      return JSON.parse(data).login;
    }
    return null;
  }
}
