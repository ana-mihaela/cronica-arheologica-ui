import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './ran.routes';
import { RanComponent } from './ran.component';

@NgModule({
  declarations: [
    RanComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class RanModule {
}
