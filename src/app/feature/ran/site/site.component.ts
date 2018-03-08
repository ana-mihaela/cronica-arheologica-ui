import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'site',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class SiteComponent implements OnInit {

  public ngOnInit() {
    console.log('Site component');
  }
}
