import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './account.routes';
import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AccountComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AccountModule {
}
