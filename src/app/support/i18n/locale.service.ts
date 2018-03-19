import { Injectable } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { roLocale } from './locales/ro.locale';

defineLocale('ro', roLocale);

@Injectable()
export class LocaleService {

  constructor(private bsLocaleService: BsLocaleService) { }

  public use(locale: string): void {
    this.bsLocaleService.use(locale);
  }
}
