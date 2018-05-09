import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html'
})
export class SidebarComponent {

  @Output()
  sidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;
  heritageMenuOpen = false;

  public toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggled.emit(this.sidebarOpen);
  }
}
