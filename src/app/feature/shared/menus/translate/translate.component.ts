import { Component } from '@angular/core';
import { I18nService } from '@app/support';

@Component({
  selector: 'app-translate',
  template: `
    <div style="margin-bottom: 15px">
      <button class="btn btn-xs btn-dark" (click)="switchLanguage('ro-RO')">RO</button>
      <button class="btn btn-xs btn-dark" (click)="switchLanguage('en-US')">EN</button>
    </div>
  `
})
export class TranslateComponent {

  constructor(private i18nService: I18nService) { }

  public switchLanguage(lang: string) {
    this.i18nService.language = lang;
  }
}
