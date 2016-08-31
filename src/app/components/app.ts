import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/auth';


@Component({
  selector: 'app',
  template: `
    <app-header
      [authenticated]="authenticated"
      (signOut)="signOut()"></app-header>

    <main class="main">
      <router-outlet></router-outlet>
    </main>
  `
})

export class AppComponent {
  constructor(private auth: AuthService, private router: Router) {
  }

  public get authenticated() {
    return this.auth.authenticated;
  }

  signOut(): void {
    this.auth.signOut().then(() => this.router.navigate(['/']));
  }
}
