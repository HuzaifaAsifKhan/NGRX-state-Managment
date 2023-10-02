import { createReducer, on } from '@ngrx/store';
import { IUserState } from './auth.state';
import { loginStart, loginSuccess, signupSuccess } from './auth.action';

export const AuthReducer = createReducer(
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
  })
);
