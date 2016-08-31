import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth-service';


@Component({
  template: `
      <h1>Sign in</h1>
      <button (click)="signIn()" type="button">Sign in</button>
  `
})

export class SignInComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  signIn() {
    this.auth.signIn()
      .then(() => this.postSignIn());
  }

  private postSignIn() {
    this.router.navigate(['/tasks']);
  }
}
