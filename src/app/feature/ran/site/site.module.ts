import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './site.routes';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteItemComponent } from './site-item/site-item.component';

@NgModule({
  declarations: [
    SiteListComponent,
    SiteItemComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SiteModule {
}
