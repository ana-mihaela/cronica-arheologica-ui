import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';

const log = new Logger('MainComponent');

@Component({
  selector: 'main',
  templateUrl: 'main.component.html'
})
export class MainComponent implements OnInit {

  sidebarOpen: boolean;

  public ngOnInit() {
    log.debug('init');
  }

  sidebarToggleHandler(event: boolean) {
    this.sidebarOpen = event;
  }
}
