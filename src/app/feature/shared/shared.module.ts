import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSelectModule } from 'ngx-select-ex';
import { CoreModule } from '@app/core';
import { SupportModule } from '@app/support';

import {
  BsDropdownModule,
  CollapseModule,
  AlertModule,
  BsDatepickerModule,
  ProgressbarModule,
  TooltipModule} from 'ngx-bootstrap';

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
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule,
    BsDropdownModule,
    CollapseModule,
    AlertModule,
    BsDatepickerModule,
    ProgressbarModule,
    TooltipModule,
    NgxSelectModule,
    CoreModule,
    SupportModule,
    COMPONENTS
  ],
})
export class SharedModule {
}
