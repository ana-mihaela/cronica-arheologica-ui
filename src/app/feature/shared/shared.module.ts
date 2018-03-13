import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from '@app/core';
import { SupportModule } from '@app/support';

import {
  SocialComponent,
  SidebarOpenComponent,
  SidebarCloseComponent,
  TranslateComponent
} from './menus';

import {
  PaginationComponent
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
    PaginationComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    NgbModule,
    CoreModule,
    SocialComponent,
    SidebarOpenComponent,
    SidebarCloseComponent,
    TranslateComponent,
    PaginationComponent
  ],
})
export class SharedModule {
}
