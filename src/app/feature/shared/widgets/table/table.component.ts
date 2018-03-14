import { Component, EventEmitter, ContentChildren, QueryList, Input, Output } from '@angular/core';
import { TableColumnDirective } from './table-column.directive';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html'
})
export class TableComponent {

  private _sortBy: string;
  private _sortAsc: boolean = true;
  private _items: any[] = [];

  @Output() doSort = new EventEmitter<SortParams>();

  @ContentChildren(TableColumnDirective) columns: QueryList<TableColumnDirective>;

  @Input()
  get sortBy() {
    return this._sortBy;
  }

  set sortBy(value: string) {
    this._sortBy = value;
    this.triggerSort();
  }

  @Input()
  get sortAsc() {
    return this._sortAsc;
  }

  set sortAsc(value: boolean) {
    this._sortAsc = value;
    this.triggerSort();
  }

  @Input() get items() {
    return this._items;
  }

  set items(items: any[]) {
    this._items = items;
  }

  triggerSort(): void {
    const params = {
      sortBy: this.sortBy,
      sortAsc: this.sortAsc
    };

    this.doSort.emit(params);
  }
}

export interface SortParams {
  sortBy: string;
  sortAsc: boolean;
}
