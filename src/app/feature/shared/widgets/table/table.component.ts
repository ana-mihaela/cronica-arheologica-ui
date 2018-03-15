import {
  Component, EventEmitter,
  ContentChildren, ContentChild,
  QueryList, Input, Output, OnInit,
  TemplateRef, ViewChildren
} from '@angular/core';

import { TableColumnDirective } from './table-column.directive';
import { TableRowComponent } from './table-row.component';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {

  private _sortBy: string;
  private _sortAsc: boolean = true;
  private _page: number;

  @Input() expandableRows = false;
  @Input() pagination = false;
  @Input() total: number;
  @Input() perPage: number;
  @Input() pagesToShow: number;
  @Input() loading: boolean;
  @Input() items: any[] = [];

  @Output() headerClick = new EventEmitter();
  @Output() rowClick = new EventEmitter();
  @Output() rowDoubleClick = new EventEmitter();
  @Output() selectItemChange = new EventEmitter();
  @Output() tableReload = new EventEmitter();

  @ContentChildren(TableColumnDirective) columns: QueryList<TableColumnDirective>;
  @ViewChildren(TableRowComponent) rows: QueryList<TableRowComponent>;
  @ContentChild('tableExpand') expandTemplate: TemplateRef<any>;

  selectedRow: TableRowComponent;

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

  @Input()
  get page() {
    return this._page;
  }

  set page(value: number) {
    this._page = value;
    this.triggerReload();
  }

  // Init

  ngOnInit(): void {
    this.initClickEvents();
  }

  private initClickEvents(): void {
    this.headerClick.subscribe(tableEvent => this.sortColumn(tableEvent.column));
    this.rowClick.subscribe(tableEvent => tableEvent.row.selected = true);
    this.rowDoubleClick.subscribe(tableEvent => tableEvent.row.expanded = !tableEvent.row.expanded);
  }

  // Click events

  headerClicked(column: TableColumnDirective, event: MouseEvent) {
    this.headerClick.emit({ column, event });
  }

  rowClicked(row: TableRowComponent, event: MouseEvent) {
    this.rowClick.emit({ row, event });
  }

  rowDoubleClicked(row: TableRowComponent, event: MouseEvent) {
    this.rowDoubleClick.emit({ row, event });
  }

  rowSelectChanged(row: TableRowComponent) {
    if (row.selected) {
      this.selectedRow = row;
      this.selectItemChange.emit(this.selectedRow.item);

      this.rows.toArray().filter(r => r.selected).forEach(r => {
        if (r !== row) {
          r.selected = false;
        }
      });
    }
  }

  // Paging events

  goToPage(page: number): void {
    this.page = page;
  }

  onNext(): void {
    this.page++;
  }

  onPrev(): void {
    this.page--;
  }

  // Methods

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
      sortAsc: this.sortAsc,
      page: this.page,
      perPage: this.perPage
    };

    this.tableReload.emit(params);
  }
}

export interface TableParams {
  sortBy: string;
  sortAsc: boolean;
  page: number;
  perPage: number;
}
