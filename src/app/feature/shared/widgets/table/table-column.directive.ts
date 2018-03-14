import { Directive, Input, ContentChild } from '@angular/core';

@Directive({
  selector: 'app-table-column'
})
export class TableColumnDirective {

  // init:
  @Input() header: string;
  @Input() sortable = false;
  @Input() property: string;
  @Input() styleClass: string;

  // init and state:
  @Input() width: string;
  @Input() minWidth: string;

  @ContentChild('dataTableCell') cellTemplate;
  @ContentChild('dataTableHeader') headerTemplate;
}
