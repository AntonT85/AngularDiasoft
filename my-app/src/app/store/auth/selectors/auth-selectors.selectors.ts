import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromAuth from '../reducers/auth-reducer.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(fromAuth.authReducerFeatureKey);

export const isAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state.userData
);
