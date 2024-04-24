import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth-service";
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import {State} from "../../store";
import {isAuthenticated, selectUser} from "../../store/auth/selectors/auth-selectors.selectors";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})

export class HeaderComponent {

  public login$ = this.store.select(selectUser).pipe(
    map((data) => {
      if (data) {
        return data[0].firstName + ' ' + data[0].lastName;
      }
      return '';
    })
  )

  public isAuthenticated: boolean = false;

  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly store: Store<State>,
  ) {
  }

  ngOnInit(): void {
    this.store.select(isAuthenticated).pipe(
      map((data) => {
        this.isAuthenticated = data;
      })
    ).subscribe()
  }

  public logOut(): void {
    this.authService.logout();
    this.router.navigate(['']);
  }

}
