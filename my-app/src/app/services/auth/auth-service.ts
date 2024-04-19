import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IUser} from "../../shared/interfaces/user/user.interface";
import {Observable, Subject} from "rxjs";
import {delay, map} from "rxjs/operators";
import {SpinnerService} from "../spinner/spinner.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly autUrl = "http://localhost:3000";
  loginStr = new Subject<string>();

  constructor(
    private readonly httpClient: HttpClient,
    private readonly spinnerService: SpinnerService
  ) {
  }

  public login(email: string, password: string): Observable<any> {
    this.spinnerService.setShowFlag(true);
    let params = new HttpParams().set('email', email).set('password', password);
    return this.httpClient.get<IUser[]>(`${this.autUrl}/users`, {params}).pipe(
      delay(1000),
      map((result: IUser[]) => {
        if (result.length > 0) {
          localStorage.setItem("userData", result[0].firstName + ' ' + result[0].lastName);
          localStorage.setItem("access_token", result[0].fakeToken);
          this.loginStr.next(localStorage.getItem("userData") + "");
          this.spinnerService.setShowFlag(false);
        }
      })
    );
  }

  public logout(): void {
    this.GetUserInfo().subscribe((result: IUser[]) => {
      if (result.length > 0) {
        console.log("Выход " + localStorage.getItem("userData"));
        localStorage.removeItem("access_token");
        localStorage.removeItem("userData");
      }
    })
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem("access_token") != null;
  }

  public GetUserInfo(): Observable<IUser[]> {
    let params = new HttpParams().set('fakeToken', localStorage.getItem("access_token") + "");
    return this.httpClient.get<IUser[]>(`${this.autUrl}/users`, {params});
  }

  public getAuthorizationToken(): string {
    return localStorage.getItem("access_token") + "";
  }

  public getUserData(): string {
    return localStorage.getItem("userData") + "";
  }
}
