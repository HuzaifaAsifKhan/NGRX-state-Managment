import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IUser } from '../store/auth.state';

@Injectable()
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }


  login = (email: string, password: string, returnSecureToken: boolean = true): Observable<IUser>  => {
    return this.http.post<IUser>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebase_api_key}`, {email, password, returnSecureToken});
  }
}
