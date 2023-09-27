import { createAction, props } from "@ngrx/store";
import { IUser } from './auth.state';
export const loginStart = createAction('loginStart', props<{email: string, password: string}>());
export const loginSuccess = createAction('loginSuccess', props<{user: IUser}>());
export const loginFail = createAction('loginFail');