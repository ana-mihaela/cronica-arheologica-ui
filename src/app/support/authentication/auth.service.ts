import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

/**
 * Provides a base for authentication workflow.
 */
@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';
  path = 'http://localhost:8080';

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Authenticates the user.
   */
  public login(data: LoginData): Observable<any> {
    return this.http.post(this.path + '/auth', data).pipe(
      map((res: any) => {
        return this.processAuth(res);
      })
    );
  }

  /**
   * Registers the user.
   */
  public register(data: RegisterData): Observable<any> {
    return this.http.post(this.path + '/register', data).pipe(
      map((res: any) => {
        return this.processAuth(res);
      })
    );
  }

  public processAuth(res: any) {
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
    this.router.navigate(['/account/login']);
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
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  password: string;
}
