import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class AuthService {
  private _authState = new Rx.BehaviorSubject(null);

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
    this._authState.next(null);
  }
}
