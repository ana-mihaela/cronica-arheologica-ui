import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { AuthState, StateService } from '../state/state.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { of } from 'rxjs/observable/of';

const credentialsKey = 'credentials';
const baseUrl = 'http://localhost:8080';

/**
 * Provides a base for authentication workflow.
 */
@Injectable()
export class AuthService {

  private _credentials: Credentials | null;

  constructor(private http: HttpClient,
              private state: StateService) {
    const savedCredentials = sessionStorage.getItem(credentialsKey) || localStorage.getItem(credentialsKey);
    if (savedCredentials) {
      this._credentials = JSON.parse(savedCredentials);
    }
  }

  /**
   * Authenticates the user.
   */
  public login(context: LoginContext): Observable<true> {

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    const data = JSON.stringify({
      username: context.username,
      password: context.password
    });

    return this.http.post(`${baseUrl}/auth`, data, { headers: headers })
      .map((response: any) => {
        const token = response.token;
        const authenticated = !!token;

        if (authenticated) {
          const credentials = {username: context.username, token: token};
          this.setCredentials(credentials, context.remember);
        }

        this.state.authState = authenticated ? AuthState.LoggedIn : AuthState.LoggedOut;
        return authenticated;
      }).catch((response: HttpErrorResponse) =>
        Observable.throw(response.error.error || 'Server error')
      );
  }

  /**
   * Logs out the user and clear credentials.
   */
  public logout(): Observable<boolean> {
    this.setCredentials();
    this.state.authState = AuthState.LoggedOut;
    return of(true);
  }

  /**
   * Checks if the user is authenticated.
   */
  public isAuthenticated(): boolean {
    return !!this.credentials;
  }

  /**
   * Gets the user credentials.
   */
  get credentials(): Credentials | null {
    return this._credentials;
  }

  /**
   * Sets the user credentials.
   */
  private setCredentials(credentials?: Credentials, remember?: boolean) {
    this._credentials = credentials || null;

    if (credentials) {
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      sessionStorage.removeItem(credentialsKey);
      localStorage.removeItem(credentialsKey);
    }
  }
}

export interface Credentials {
  username: string;
  token: string;
}

export interface LoginContext {
  username: string;
  password: string;
  remember?: boolean;
}
