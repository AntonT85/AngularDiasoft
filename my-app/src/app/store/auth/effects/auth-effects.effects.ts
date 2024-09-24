import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromAuthActions from '../actions/auth-actions.actions';
import {Store} from "@ngrx/store";
import {State} from '../..';
import {AuthService} from "../../../services/auth/auth-service";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs";
import {MessageService} from "primeng/api";


@Injectable()
export class AuthEffectsEffects {

  public loginEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.login),
    switchMap(({email, password}) => this.authService.login(email, password).pipe(
      map((data) => fromAuthActions.loginSuccess({data})),
      catchError((error) => of(fromAuthActions.loginFailure({error})))
    ))
  ));

  public loginSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.loginSuccess),
    map((data) => console.log("Выполнен вход в систему"))
  ), {dispatch: false});

  public loginFailure$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.loginFailure),
    map((data) => this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: data.error
    }))
  ), {dispatch: false});

  constructor(private actions$: Actions, private readonly authService: AuthService, private readonly store: Store<State>, private readonly messageService: MessageService) {
  }
}
