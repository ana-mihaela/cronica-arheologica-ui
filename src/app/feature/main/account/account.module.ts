import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './account.routes';
import { AccountComponent } from './account.component';

@NgModule({
  declarations: [
    AccountComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AccountModule {
}
