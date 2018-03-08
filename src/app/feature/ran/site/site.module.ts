import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './site.routes';
import { SiteComponent } from './site.component';

@NgModule({
  declarations: [
    SiteComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SiteModule {
}
