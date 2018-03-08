import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './feature.routes';
import { FeatureComponent } from './feature.component';

@NgModule({
  declarations: [
    FeatureComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class FeatureModule {
}
