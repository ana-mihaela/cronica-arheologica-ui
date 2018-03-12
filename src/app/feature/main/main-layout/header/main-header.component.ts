import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: 'main-header.component.html'
})
export class MainHeaderComponent {

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
