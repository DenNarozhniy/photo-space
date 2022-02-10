import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngrx/store';

import { AuthState, LoginSuccessAction,  } from "@photo-space/auth-store";
import { environment } from '@photo-space/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private host: string = environment.HOST;
  private jwtHelper = new JwtHelperService();

  constructor(
    private httpClient: HttpClient,
    private store: Store<{auth: AuthState}>
    ) { }

  login({email, password}) {
    return this.httpClient
      .post<{access_token: string}>(`${this.host}login`, {email, password})
      .pipe(tap((res: any) => {
        if (res.user) {
          this.store.dispatch(LoginSuccessAction(res.user));
        }
        localStorage.setItem('access_token', res.token);
    }));
  }

  register({name, email, password}) {
    return this.httpClient
      .post<{access_token: string}>(`${this.host}register-user`, {name, email, password})
      .pipe(tap((res: any) => {
        if (res.user) {
          this.store.dispatch(LoginSuccessAction(res.user));
        }
        localStorage.setItem('access_token', res.token);
      }));
  }

  logout(): void {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    const token = localStorage.getItem('access_token')
    const isExpired = !!token ? !this.jwtHelper.isTokenExpired(token) : false;
    return isExpired;
  }
}
