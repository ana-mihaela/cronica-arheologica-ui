import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { FormBase, PasswordValidation, ValidationService } from '@app/support';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent extends FormBase {

  error = '';

  get form(): FormGroup {
    return this._form;
  }

  constructor() {
    super(null);
  }

  protected initForm(data: any): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('')
    }, PasswordValidation.MatchPassword);
  }

  submit() {
    ValidationService.triggerValidation(this.form);
    if (this.form.valid) {
      console.log(this.form.value);
    }
  }
}
