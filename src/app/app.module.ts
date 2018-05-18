import { NgModule } from '@angular/core';
import { APP_BASE_HREF, PlatformLocation} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { NgxSelectModule } from 'ngx-select-ex';

import {
  SupportModule,
  AuthInterceptor,
  ErrorInterceptor,
  ApiInterceptor } from './support';

import { ROUTES } from './app.routes';
import { CoreModule } from './core';
import { AppComponent } from './app.component';
import { NoContentComponent } from './no-content';

import {
  BsDropdownModule,
  CollapseModule,
  AlertModule,
  BsDatepickerModule,
  ProgressbarModule,
  TooltipModule} from 'ngx-bootstrap';

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
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    BsDatepickerModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    NgxSelectModule,
    RouterModule.forRoot(ROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
    }),
    TranslateModule.forRoot(),
    CoreModule,
    SupportModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useFactory: getBaseHref, deps: [PlatformLocation] },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
