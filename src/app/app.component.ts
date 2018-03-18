import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Logger, I18nService } from '@app/support';

import { environment } from '@env/environment';
const log = new Logger('AppComponent');

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div lang="{{ language }}">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService,
              private i18nService: I18nService) { }

  public ngOnInit() {

    if (environment.production) {
      Logger.enableProductionMode();
    }

    this.i18nService.init(environment.defaultLanguage, environment.supportedLanguages);
  }

  get language(): string {
    return this.i18nService.language;
  }
}
