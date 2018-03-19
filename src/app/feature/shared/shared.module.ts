import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { NgxSelectModule } from 'ngx-select-ex';
import { CoreModule } from '@app/core';
import { SupportModule } from '@app/support';

import {
  SocialComponent,
  SidebarOpenComponent,
  SidebarCloseComponent,
  TranslateComponent
} from './menus';

import {
  PaginationComponent,
  TableColumnDirective,
  TableRowComponent,
  TableComponent
} from './widgets';

const COMPONENTS = [
  SocialComponent,
  SidebarOpenComponent,
  SidebarCloseComponent,
  TranslateComponent,
  PaginationComponent,
  TableColumnDirective,
  TableRowComponent,
  TableComponent
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CoreModule,
    SupportModule
  ],
  declarations: [
    SocialComponent,
    SidebarOpenComponent,
    SidebarCloseComponent,
    TranslateComponent,
    PaginationComponent,
    TableColumnDirective,
    TableRowComponent,
    TableComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule,
    BsDropdownModule,
    CollapseModule,
    AlertModule,
    BsDatepickerModule,
    NgxSelectModule,
    CoreModule,
    COMPONENTS
  ],
})
export class SharedModule {
}
