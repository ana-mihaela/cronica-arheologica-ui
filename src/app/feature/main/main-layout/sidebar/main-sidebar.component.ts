import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: 'main-sidebar.component.html'
})
export class MainSidebarComponent {

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
