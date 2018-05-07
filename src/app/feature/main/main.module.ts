import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@app/feature/shared';

import { routes } from './main.routes';
import { MainComponent } from './main.component';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    MainComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
})
export class MainModule {
}
