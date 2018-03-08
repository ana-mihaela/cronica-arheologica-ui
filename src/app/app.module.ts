import { NgModule } from '@angular/core';
import { APP_BASE_HREF, PlatformLocation} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core';
import { SupportModule } from './support';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

export function getBaseHref(platformLocation: PlatformLocation): string {
  return platformLocation.getBaseHrefFromDOM();
}

@NgModule({
  declarations: [
    AppComponent,
    NoContentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    TranslateModule.forRoot(),
    CoreModule,
    SupportModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useFactory: getBaseHref, deps: [PlatformLocation] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
