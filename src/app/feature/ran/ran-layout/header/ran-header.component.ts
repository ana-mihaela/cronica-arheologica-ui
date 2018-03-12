import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ran-header',
  templateUrl: 'ran-header.component.html'
})
export class RanHeaderComponent {

  @Output()
  onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;

  public sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.onSidebarToggle.emit(this.sidebarOpen);
  }
}
