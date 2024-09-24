import {createAction, props} from '@ngrx/store';
import {IUser} from "../../../shared/interfaces/user/user.interface";

export const login = createAction(
  '[Auth] Login',
  props<{ email: string, password: string }>()
);

export const loginSuccess = createAction(
  '[Auth] Get Login Success',
  props<{ data: IUser[] }>()
);

export const loginFailure = createAction(
  '[Auth] Get Login Failure',
  props<{ error: any }>()
);
