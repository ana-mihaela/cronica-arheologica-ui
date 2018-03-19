import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './site.routes';

import { SiteListComponent } from './site-list/site-list.component';
import { SiteFiltersComponent } from './site-filters/site-filters.component';
import { SiteViewComponent } from './site-view/site-view.component';
import { SiteAddComponent } from './site-add/site-add.component';

@NgModule({
  declarations: [
    SiteListComponent,
    SiteFiltersComponent,
    SiteViewComponent,
    SiteAddComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class SiteModule {
}
