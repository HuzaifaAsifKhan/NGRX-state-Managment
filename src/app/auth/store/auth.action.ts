import { createAction, props } from '@ngrx/store';
import { IUser } from './auth.state';

// Login Actions
export const loginStart = createAction(
  'loginStart',
  props<{ email: string; password: string }>()
);
export const loginSuccess = createAction(
  'loginSuccess',
  props<{ user: IUser }>()
);
export const loginFail = createAction('loginFail');

// SignUp Actions
export const signupStart = createAction(
  'signupStart',
  props<{ email: string; password: string }>()
);
export const signupSuccess = createAction(
  'signupSuccess',
  props<{ user: IUser }>()
);
export const signupFail = createAction('signupFail');
