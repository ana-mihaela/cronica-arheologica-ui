import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StateService {

  private _authState: AuthState;
  private authEvent: BehaviorSubject<AuthState> = new BehaviorSubject(AuthState.LoggedOut);

  set authState(authState: AuthState) {
    this._authState = authState;
    this.authEvent.next(authState);
  }

  public getAuthState(): Observable<AuthState> {
    return this.authEvent.asObservable();
  }
}

export const enum AuthState {
  LoggedIn,
  LoggedOut
}
