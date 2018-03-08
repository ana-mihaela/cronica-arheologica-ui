import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule, SocialComponent } from '@app/feature/shared';

import { routes } from './main.routes';
import { HeaderComponent, SidebarComponent } from './main-layout';
import { MainComponent } from './main.component';
import { HomeComponent } from './home';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
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
