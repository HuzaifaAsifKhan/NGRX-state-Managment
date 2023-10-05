import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, exhaustMap, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/app.state';
import { getUserToken } from 'src/app/auth/store/auth.selector';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private store: Store<IAppState>) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getUserToken).pipe(
      take(1),
      exhaustMap((token) => {
        if (!token) {
          return next.handle(req);
        }
        const request = req.clone({ params: req.params.append('auth', token) });
        return next.handle(request);
      })
    );
  }
}
