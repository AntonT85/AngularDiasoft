import {createReducer, on} from '@ngrx/store';
import * as fromAuthActions from '../actions/auth-actions.actions';
import {IUser} from "../../../shared/interfaces/user/user.interface";

export const authReducerFeatureKey = 'auth';

export interface State {
  userData: IUser[],
  isAuthenticated: boolean
}

export const initialState: State = {
  userData: [],
  isAuthenticated: false
};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.login, (state) => ({...state, isAuthenticated: false})),
  on(fromAuthActions.loginSuccess, (state, {data}) => ({...state, userData: [...data], isAuthenticated: true})),
  on(fromAuthActions.loginFailure, (state) => ({...state, isAuthenticated: false}))
);
