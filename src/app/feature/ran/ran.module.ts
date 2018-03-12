import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './ran.routes';
import { RanHeaderComponent, RanSidebarComponent } from './ran-layout';
import { RanComponent } from './ran.component';

@NgModule({
  declarations: [
    RanHeaderComponent,
    RanSidebarComponent,
    RanComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class RanModule {
}
