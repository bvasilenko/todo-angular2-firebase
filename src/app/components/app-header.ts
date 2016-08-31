import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  template: `
    App header
    <span *ngIf="authenticated"><a (click)="signOut.emit()" href="javascript:void(0)">Sign out</a></span>
  `
})

export class AppHeaderComponent {
  @Input() authenticated: boolean;
  @Output() signOut = new EventEmitter(false);
}
