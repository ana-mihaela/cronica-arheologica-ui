import {
  Component, EventEmitter,
  ContentChildren, ContentChild,
  QueryList, Input, Output, OnInit, TemplateRef
} from '@angular/core';

import { TableColumnDirective } from './table-column.directive';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

  private _sortBy: string;
  private _sortAsc: boolean = true;
  private _items: any[] = [];

  @Input() expandableRows = false;

  @Output() tableSort = new EventEmitter<SortParams>();
  @Output() headerClick = new EventEmitter();

  @ContentChildren(TableColumnDirective) columns: QueryList<TableColumnDirective>;
  @ContentChild('tableExpand') expandTemplate: TemplateRef<any>;

  ngOnInit(): void {
    this.initClickEvents();
  }

  @Input()
  get sortBy() {
    return this._sortBy;
  }

  set sortBy(value: string) {
    this._sortBy = value;
    this.triggerReload();
  }

  @Input()
  get sortAsc() {
    return this._sortAsc;
  }

  set sortAsc(value: boolean) {
    this._sortAsc = value;
    this.triggerReload();
  }

  @Input() get items() {
    return this._items;
  }

  set items(items: any[]) {
    this._items = items;
  }

  private initClickEvents(): void {
    this.headerClick.subscribe(tableEvent => this.sortColumn(tableEvent.column));
  }

  headerClicked(column: TableColumnDirective, event: MouseEvent) {
    this.headerClick.emit({ column, event });
  }

  private sortColumn(column: TableColumnDirective): void {
    if (column.sortable) {
      const ascending = this.sortBy === column.property ? !this.sortAsc : true;
      this.sort(column.property, ascending);
    }
  }

  private sort(sortBy: string, asc: boolean): void {
    this.sortBy = sortBy;
    this.sortAsc = asc;
  }

  private triggerReload(): void {
    const params = {
      sortBy: this.sortBy,
      sortAsc: this.sortAsc
    };

    this.tableSort.emit(params);
  }
}

export interface SortParams {
  sortBy: string;
  sortAsc: boolean;
}
