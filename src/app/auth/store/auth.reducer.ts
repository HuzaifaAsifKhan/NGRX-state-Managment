import { createReducer, on } from '@ngrx/store';
import { IUserState } from './auth.state';
import { loginStart, loginSuccess, logout, signupSuccess } from './auth.action';

export const authReducer = createReducer(
  new IUserState(),
  // we dont need to call loginStart when we have effect calling on function behafe
  // on(loginStart, (state, action) => {
  //     return {
  //         ...state
  //     }
  // }),
  on(loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(signupSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
    };
  }),
  on(logout, (state, action) => {
    return {
      ...state,
      user: null,
    };
  })
);
