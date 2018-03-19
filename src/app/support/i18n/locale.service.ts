import { Injectable } from '@angular/core';
import { BsLocaleService } from 'ngx-bootstrap';

import { defineLocale } from 'ngx-bootstrap/chronos';
import { deLocale } from 'ngx-bootstrap/locale';

defineLocale('de', deLocale);

@Injectable()
export class LocaleService {

  constructor(private bsLocaleService: BsLocaleService) { }

  public use(locale: string): void {
    this.bsLocaleService.use(locale);
  }
}
