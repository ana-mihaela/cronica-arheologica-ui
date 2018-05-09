import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StateService } from './state/state.service';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';
import { I18nService } from './i18n/i18n.service';
import { LocaleService } from './i18n/locale.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class SupportModule {
  static forRoot() {
    return {
      ngModule: SupportModule,
      providers: [
        StateService,
        AuthService,
        I18nService,
        LocaleService,
        AuthGuard
      ]
    };
  }
}
