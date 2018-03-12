import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';

const log = new Logger('RanComponent');

@Component({
  selector: 'administration',
  templateUrl: 'ran.component.html'
})
export class RanComponent implements OnInit {

  sidebarOpen: boolean;

  public ngOnInit() {
    log.debug('init');
  }

  sidebarToggleHandler(event: boolean) {
    this.sidebarOpen = event;
  }
}
