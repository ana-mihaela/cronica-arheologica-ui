import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { map, catchError } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

/**
 * Provides a base for authentication workflow.
 */
@Injectable()
export class AuthService {

  CREDENTIALS_KEY = 'credentials';

  path = 'http://localhost:8000/users';
  headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  /**
   * Authenticates the user.
   */
  public login(data: LoginData) {
    this.http.post<any>(this.path + '/login', data, { headers: this.headers }).subscribe(res => {
      this.saveCredentials({email: data.email, token: res.token});
    });
  }

  /**
   * Registers the user.
   */
  public register(data: RegisterData): Observable<Boolean> {
    return this.http.post(this.path + '/register', data, { headers: this.headers }).pipe(
      map((res: any) => {
        const token = res.token;
        const authenticated = !!token;

        if (authenticated) {
          const credentials = {email: data.email, token: token};
          this.saveCredentials(credentials);
        }
        return authenticated;
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err.error.message || 'Server error'); }
      ));
  }

  /**
   * Logs out the user and clear credentials.
   */
  public logout() {
    localStorage.removeItem(this.CREDENTIALS_KEY);
  }

  /**
   * Checks if the user is authenticated.
   */
  public isAuthenticated(): boolean {
    return !!localStorage.getItem(this.CREDENTIALS_KEY);
  }

  /**
   * Saves the user credentials.
   */
  private saveCredentials(credentials?: Credentials) {
    localStorage.setItem(this.CREDENTIALS_KEY, JSON.stringify(credentials));
  }
}

export interface Credentials {
  email: string;
  token: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
}
