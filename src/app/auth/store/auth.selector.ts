import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState } from './auth.state';

export const AUTH_STATE = 'auth';

const getAuthState = createFeatureSelector<IUserState>(AUTH_STATE);

export const getUser = createSelector(getAuthState, (state) => {
  return state.user;
});

export const getUserToken = createSelector(getAuthState, (state) => {
  return state.user?.idToken;
});
