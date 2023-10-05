import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { getUser } from 'src/app/auth/store/auth.selector';
import { IAppState } from 'src/app/store/app.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<IAppState>, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | any {
    return this.store.select(getUser).pipe(
      map((resp) => {
        if (resp) {
          return true;
        }
        return this.router.createUrlTree(['auth']);
      })
    );
  }
}
