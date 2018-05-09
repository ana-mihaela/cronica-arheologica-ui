import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '@app/support';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  @Output()
  sidebarToggled: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  sidebarOpen: boolean;
  accountMenuOpen = false;

  constructor(private authService: AuthService) { }

  public closeTopMenus() {
    this.accountMenuOpen = false;
  }

  public toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggled.emit(this.sidebarOpen);
  }
}
