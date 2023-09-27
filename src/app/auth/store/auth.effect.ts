import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "../services/auth.service";
import { loginFail, loginStart, loginSuccess } from "./auth.action";
import { catchError, exhaustMap, map, of } from "rxjs";
import { IAuthLogin, IUser, User } from "./auth.state";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService
    ){}

    login$ = createEffect(() => this.actions$.pipe(
        ofType(loginStart),
        exhaustMap((action: IAuthLogin) => this.authService.login(action.email, action.password)
          .pipe(
            map((user:IUser) => loginSuccess({ user })),
            catchError(() => of(loginFail()))
          ))
        )
      );
}