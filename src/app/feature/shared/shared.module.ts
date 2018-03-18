import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
    NgbModule,
    NgxSelectModule,
    CoreModule,
    SocialComponent,
    SidebarOpenComponent,
    SidebarCloseComponent,
    TranslateComponent,
    PaginationComponent,
    TableColumnDirective,
    TableRowComponent,
    TableComponent
  ],
})
export class SharedModule {
}
