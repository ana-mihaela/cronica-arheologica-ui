import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

import { AuthService, FormBase,
  PasswordValidation, ValidationService } from '@app/support';

@Component({
  selector: 'register',
  templateUrl: 'register.component.html'
})
export class RegisterComponent extends FormBase {

  error = '';

  get form(): FormGroup {
    return this._form;
  }

  constructor(private router: Router,
              private authService: AuthService) { super(null); }

  protected initForm(data: any): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('')
    }, PasswordValidation.MatchPassword);
  }

  submit() {
    ValidationService.triggerValidation(this.form);

    if (this.form.valid) {
      const data = {
        email: this.form.value.email,
        password: this.form.value.password
      };

      this.authService.register(data).subscribe(
        res => {
          if (res.success === true) {
            this.router.navigate(['/']);
          } else {
            this.error = res.message;
          }
        },
        err => this.error = err
      );
    }
  }
}
