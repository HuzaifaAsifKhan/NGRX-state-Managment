import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../../shared/services/auth.service';
import {
  getUser,
  loginFail,
  loginStart,
  loginSuccess,
  logout,
  signupStart,
  signupSuccess,
} from './auth.action';
import { catchError, exhaustMap, map, mergeMap, of, tap } from 'rxjs';
import { IAuth, IUser } from './auth.state';
import { IShareState } from 'src/app/shared/store/shared.state';
import { Store } from '@ngrx/store';
import { setErrormessage, setLoader } from 'src/app/shared/store/share.action';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<{ share: IShareState }>,
    private router: Router
  ) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action: IAuth) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.authService.login(action.email, action.password).pipe(
          map((user: IUser) => {
            this.authService.saveUser(user);
            this.store.dispatch(setLoader({ status: false }));
            this.store.dispatch(setErrormessage({ message: '' }));
            return loginSuccess({ user, redirect: true });
          }),
          catchError((error) => {
            this.store.dispatch(setLoader({ status: false }));
            // this.store.dispatch(setErrormessage({message: error.error.error.message || 'SOMETHING WENT WRONG'}));
            return of(
              setErrormessage({
                message: error.error.error.message || 'SOMETHING WENT WRONG',
              })
            );
            // return of(loginFail())
          })
        );
      })
    )
  );

  signup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action: IAuth) => {
        this.store.dispatch(setLoader({ status: true }));
        return this.authService.signup(action.email, action.password).pipe(
          map((user: IUser) => {
            this.authService.saveUser(user);
            this.store.dispatch(setLoader({ status: false }));
            this.store.dispatch(setErrormessage({ message: '' }));
            return signupSuccess({ user, redirect: true });
          }),
          catchError((error) => {
            this.store.dispatch(setLoader({ status: false }));
            // this.store.dispatch(setErrormessage({message: error.error.error.message || 'SOMETHING WENT WRONG'}));
            return of(
              setErrormessage({
                message: error.error.error.message || 'SOMETHING WENT WRONG',
              })
            );
            // return of(loginFail())
          })
        );
      })
    )
  );

  getUserDetail$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUser),
      mergeMap((action: any) => {
        const user = this.authService.getUserData();
        this.store.dispatch(setErrormessage({ message: '' }));
        return of(loginSuccess({ user, redirect: false }));
      })
    )
  );

  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        map((action: any) => {
          const user = this.authService.logout();
          this.router.navigate(['auth']);
        })
      ),
    { dispatch: false }
  );

  redirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(...[loginSuccess, signupSuccess]),
        tap((action) => {
          action.redirect ? this.router.navigate(['/']) : '';
        })
      );
    },
    { dispatch: false }
  );
}
