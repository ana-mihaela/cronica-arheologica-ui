import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StateService } from './state/state.service';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './authentication/auth.guard';
import { I18nService } from './i18n/i18n.service';

@NgModule({
  imports: [
    CommonModule
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
        AuthGuard
      ]
    };
  }
}
