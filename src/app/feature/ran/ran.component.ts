import { Component, OnInit } from '@angular/core';
import { Logger } from '@app/support';

const log = new Logger('RanComponent');

@Component({
  selector: 'administration',
  templateUrl: 'ran.component.html'
})
export class RanComponent implements OnInit {

  sidebarOpen: boolean;

  private _accountMenuOpen = false;
  private _associationMenuOpen = false;
  private _tableMenuOpen = false;
  private _cashDeskMenuOpen = false;
  private _registersMenuOpen = false;
  private _reportsMenuOpen = false;

  set accountMenuOpen(accountMenuOpen: boolean) {
    this._accountMenuOpen = accountMenuOpen;
  }

  get accountMenuOpen() {
    return this._accountMenuOpen;
  }

  set associationMenuOpen(associationMenuOpen: boolean) {
    this._associationMenuOpen = associationMenuOpen;
  }

  get associationMenuOpen() {
    return this._associationMenuOpen;
  }

  set tableMenuOpen(tableMenuOpen: boolean) {
    this._tableMenuOpen = tableMenuOpen;
  }

  get tableMenuOpen() {
    return this._tableMenuOpen;
  }

  set cashDeskMenuOpen(cashDeskMenuOpen: boolean) {
    this._cashDeskMenuOpen = cashDeskMenuOpen;
  }

  get cashDeskMenuOpen() {
    return this._cashDeskMenuOpen;
  }

  set registersMenuOpen(registersMenuOpen: boolean) {
    this._registersMenuOpen = registersMenuOpen;
  }

  get registersMenuOpen() {
    return this._registersMenuOpen;
  }

  set reportsMenuOpen(reportsMenuOpen: boolean) {
    this._reportsMenuOpen = reportsMenuOpen;
  }

  get reportsMenuOpen() {
    return this._reportsMenuOpen;
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  public closeTopMenus() {
    this._accountMenuOpen = false;
  }

  public ngOnInit() {
    log.debug('init');
  }
}
