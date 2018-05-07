import { Component } from '@angular/core';

@Component({
  templateUrl: 'feature.component.html'
})
export class FeatureComponent {

  sidebarOpen: boolean;

  sidebarToggleHandler(event: boolean) {
    this.sidebarOpen = event;
  }
}
