import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../../auth/store/auth.state';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login = (
    email: string,
    password: string,
    returnSecureToken: boolean = true
  ): Observable<IUser> => {
    return this.http.post<IUser>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase_api_key}`,
      { email, password, returnSecureToken }
    );
  };

  signup = (
    email: string,
    password: string,
    returnSecureToken: boolean = true
  ): Observable<IUser> => {
    return this.http.post<IUser>(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebase_api_key}`,
      { email, password, returnSecureToken }
    );
  };

  getUserData = () => JSON.parse(localStorage.getItem('user') || '');

  saveUser(user: IUser) {
    localStorage.setItem('user', JSON.stringify(user));
  }
}
