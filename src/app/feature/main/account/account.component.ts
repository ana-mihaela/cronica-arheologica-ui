import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'account',
  template: `
    <h1>Account component</h1>
    <router-outlet></router-outlet>
  `,
})
export class AccountComponent implements OnInit {

  public ngOnInit() {
    console.log('Account component');
  }
}
