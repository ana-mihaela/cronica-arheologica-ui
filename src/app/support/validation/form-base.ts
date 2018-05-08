import { FormGroup } from '@angular/forms';

export abstract class FormBase {

  protected _form: FormGroup;

  constructor(data: any) {
    this._form = this.initForm(data);
  }

  get form(): FormGroup {
    return this._form;
  }

  protected abstract initForm(data: any): FormGroup;

  isFieldNotValid(field: string): boolean {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  fieldHasError(field: string, error: string): boolean {
    return this.form.get(field).hasError(error);
  }

  displayFieldCss(field: string) {
    return { 'has-error': this.isFieldNotValid(field) };
  }
}
