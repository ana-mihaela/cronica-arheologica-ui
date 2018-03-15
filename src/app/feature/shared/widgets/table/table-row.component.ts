import { Component, EventEmitter, Input, Output,
  QueryList, TemplateRef } from '@angular/core';

import { TableColumnDirective } from './table-column.directive';

@Component({
  selector: '[appTableRow]',
  templateUrl: './table-row.component.html'
})
export class TableRowComponent {

  @Input() item: any;
  @Input() index: number;
  @Input() expandableRows = false;

  @Input() columns: QueryList<TableColumnDirective>;
  @Input() expandTemplate: TemplateRef<any>;

  expanded: boolean;
  private _selected: boolean;

  @Output() selectedChange = new EventEmitter();
  @Output() rowClick = new EventEmitter();
  @Output() rowDoubleClick = new EventEmitter();

  get selected() {
    return this._selected;
  }

  set selected(selected: boolean) {
    this._selected = selected;
    this.selectedChange.emit(selected);
  }

  get columnCount() {
    let count = 0;
    count += this.expandableRows ? 1 : 0;
    count += this.columns.length;
    return count;
  }

  rowClicked(event: MouseEvent) {
    this.rowClick.emit({ row: this, event });
  }

  rowDoubleClicked(event: MouseEvent) {
    this.rowDoubleClick.emit({ row: this, event });
  }
}
