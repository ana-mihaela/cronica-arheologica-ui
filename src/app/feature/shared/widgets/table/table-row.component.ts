import { Component, EventEmitter, OnDestroy, Input, Output, QueryList } from '@angular/core';
import { TableColumnDirective } from './table-column.directive';

@Component({
  selector: '[appTableRow]',
  templateUrl: './table-row.component.html'
})
export class TableRowComponent implements OnDestroy {

  @Input() item: any;
  @Input() index: number;
  @Input() columns: QueryList<TableColumnDirective>;

  private _selected: boolean;

  @Output() selectedChange = new EventEmitter<boolean>();

  get selected() {
    return this._selected;
  }

  set selected(selected: boolean) {
    this._selected = selected;
    this.selectedChange.emit(selected);
  }

  ngOnDestroy() {
    this.selected = false;
  }
}
