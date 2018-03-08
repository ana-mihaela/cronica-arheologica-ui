import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feature',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class FeatureComponent implements OnInit {

  public ngOnInit() {
    console.log('Feature component');
  }
}
