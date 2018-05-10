import { Component, EventEmitter, Input, Output } from '@angular/core';
import {AuthService} from "@app/support";

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
  accountMenuOpen = false;

  constructor(protected authService: AuthService) { }

  public toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarToggled.emit(this.sidebarOpen);
  }
}
