import { Injectable } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { LocaleService } from './locale.service';
import { includes } from 'lodash';

import { Logger } from '../logger/logger.service';
import * as enUS from '../../../translations/en-US.json';
import * as roRO from '../../../translations/ro-RO.json';

const log = new Logger('I18nService');
const languageKey = 'language';

@Injectable()
export class I18nService {

  defaultLanguage: string;
  supportedLanguages: string[];

  constructor(private translateService: TranslateService,
              private localeService: LocaleService) {
    translateService.setTranslation('en-US', enUS);
    translateService.setTranslation('ro-RO', roRO);
  }

  /**
   * Initializes i18n for the application.
   */
  init(defaultLanguage: string, supportedLanguages: string[]) {

    log.debug(defaultLanguage);
    log.debug(this.supportedLanguages);

    this.defaultLanguage = defaultLanguage;
    this.supportedLanguages = supportedLanguages;
    this.language = defaultLanguage;

    this.translateService.onLangChange
      .subscribe((event: LangChangeEvent) => { localStorage.setItem(languageKey, event.lang); });
  }

  /**
   * Sets the current language.
   */
  set language(language: string) {

    language = language || localStorage.getItem(languageKey) || this.translateService.getBrowserCultureLang();
    let isSupportedLanguage = includes(this.supportedLanguages, language);

    // If no exact match is found, search without the region
    if (language && !isSupportedLanguage) {
      language = language.split('-')[0];
      language = this.supportedLanguages.find(supportedLanguage => supportedLanguage.startsWith(language)) || '';
      isSupportedLanguage = Boolean(language);
    }

    if (!isSupportedLanguage) {
      language = this.defaultLanguage;
    }

    log.debug(`Language set to ${language}`);
    this.translateService.use(language);

    const languagePrefix = language.split('-')[0];
    this.localeService.use(languagePrefix);
  }

  /**
   * Gets the current language.
   */
  get language(): string {
    return this.translateService.currentLang;
  }
}
