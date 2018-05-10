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
  public login(data: LoginData): Observable<any> {
    return this.http.post(this.path + '/login', data, { headers: this.headers }).pipe(
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
    return this.http.post(this.path + '/register', data, { headers: this.headers }).pipe(
      map((res: any) => {
        return this.processAuth(data.email, res);
      }),
      catchError((err: HttpErrorResponse) => {
        return throwError(err.error.message || 'Server error'); }
      ));
  }

  public processAuth(email: string, res: any) {
    const token = res.token;
    const success = !!token;

    if (success) {
      const credentials = {email: email, token: token};
      this.saveCredentials(credentials);
    }

    return {
      message: res.message,
      success: success
    };
  }

  get credentials(): Credentials | null {
    const savedCredentials = localStorage.getItem(this.CREDENTIALS_KEY);
    if (savedCredentials) {
      return JSON.parse(savedCredentials);
    }
    return null;
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
