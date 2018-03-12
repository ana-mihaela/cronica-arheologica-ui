import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ran-sidebar',
  templateUrl: 'ran-sidebar.component.html'
})
export class RanSidebarComponent {

  @Output()
  onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;

  public sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.onSidebarToggle.emit(this.sidebarOpen);
  }
}
