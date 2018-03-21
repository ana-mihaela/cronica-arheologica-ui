import { FormControl, FormGroup} from '@angular/forms';

export class ValidationService {

  static triggerValidation(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        ValidationService.triggerValidation(control);
      }
    });
  }
}
