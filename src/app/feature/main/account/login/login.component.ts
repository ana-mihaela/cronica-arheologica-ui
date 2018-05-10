import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import {AuthService, FormBase, ValidationService} from '@app/support';
import {Router} from "@angular/router";

@Component({
  selector: 'register',
  templateUrl: 'login.component.html'
})
export class LoginComponent extends FormBase {

  error = '';

  get form(): FormGroup {
    return this._form;
  }

  constructor(private router: Router,
              private authService: AuthService) { super(null); }

  protected initForm(data: any): FormGroup {
    return new FormGroup({
      email: new FormControl('', [Validators.required, CustomValidators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  submit() {
    ValidationService.triggerValidation(this.form);

    if (this.form.valid) {
      const data = this.form.value;

      this.authService.login(data).subscribe(
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
