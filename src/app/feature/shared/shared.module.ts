import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AlertModule } from 'ngx-bootstrap/alert';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
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
  TableComponent,
  WizardStepComponent,
  WizardComponent
} from './widgets';

const COMPONENTS = [
  SocialComponent,
  SidebarOpenComponent,
  SidebarCloseComponent,
  TranslateComponent,
  PaginationComponent,
  TableColumnDirective,
  TableRowComponent,
  TableComponent,
  WizardStepComponent,
  WizardComponent
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ProgressbarModule,
    CoreModule,
    SupportModule
  ],
  declarations: [
    COMPONENTS
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
    ProgressbarModule,
    NgxSelectModule,
    CoreModule,
    SupportModule,
    COMPONENTS
  ],
})
export class SharedModule {
}
