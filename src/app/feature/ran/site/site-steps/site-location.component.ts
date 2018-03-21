import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-site-location',
  templateUrl: 'site-location.component.html'
})
export class SiteLocationComponent {

  @Input()
  form: FormGroup;

  isFieldNotValid(field: string): boolean {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  fieldHasError(field: string, error: string): boolean {
    return this.form.get(field).hasError(error);
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldNotValid(field)
    };
  }
}
