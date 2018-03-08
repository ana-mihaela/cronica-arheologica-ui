import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  @Output()
  onSidebarToggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;
  heritageMenuOpen: boolean = false;

  public closeTopMenus() {
    this.heritageMenuOpen = false;
  }

  public sidebarToggle() {
    this.sidebarOpen = !this.sidebarOpen;
    this.onSidebarToggle.emit(this.sidebarOpen);
  }
}
