import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

/**
 * Provides a base for authentication workflow.
 */
@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
  path = 'http://localhost:8000/users';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Authenticates the user.
   */
  public login(data: LoginData): Observable<any> {
    return this.http.post(this.path + '/login', data).pipe(
      map((res: any) => {
        return this.processAuth(data.email, res);
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err.error.message || 'Server error'); }
      ));
  }

  /**
   * Registers the user.
   */
  public register(data: RegisterData): Observable<any> {
    return this.http.post(this.path + '/register', data).pipe(
      map((res: any) => {
        return this.processAuth(data.email, res);
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err.error.message || 'Server error'); }
      ));
  }

  public processAuth(email: string, res: any) {
    const token = res.token;
    const authenticated = !!token;

    if (authenticated) {
      this.saveToken(token);
    }

    return authenticated;
  }

  get token(): String {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Logs out the user and clear token.
   */
  public logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  /**
   * Checks if the user is authenticated.
   */
  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  /**
   * Saves the token.
   */
  private saveToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
}
