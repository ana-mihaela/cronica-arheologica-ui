import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {

  @Output()
  onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;
  heritageMenuOpen = false;

  public sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.onSidebarToggle.emit(this.sidebarOpen);
  }
}
