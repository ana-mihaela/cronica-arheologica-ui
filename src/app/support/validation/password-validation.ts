import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

  static MatchPassword(abstractControl: AbstractControl) {
    const password = abstractControl.get('password').value;
    const confirmPassword = abstractControl.get('confirmPassword').value;

    if (password !== confirmPassword) {
      abstractControl.get('confirmPassword').setErrors( { matchPassword: true } );
    } else {
      return null;
    }
  }
}
