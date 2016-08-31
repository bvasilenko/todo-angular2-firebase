import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class AuthService {
  private _authenticated: boolean;
  private _authState = new Rx.BehaviorSubject(null);

  public constructor() {
    this._authState.subscribe(state => this._authenticated = !!state);
  }

  get authenticated() {
    return this._authenticated;
  }

  get authState() {
    return this._authState.asObservable();
  }

  signIn() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        this._authState.next({ id: 'user_id' });
        resolve();
      }, 1000);
    });
  }

  signOut() {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        this._authState.next(null);
        resolve();
      }, 1000);
    });
  }
}
