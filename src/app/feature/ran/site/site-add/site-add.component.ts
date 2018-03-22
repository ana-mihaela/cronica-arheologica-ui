import { Component, OnInit } from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '@app/support';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent implements OnInit {

  isCompleted: boolean = false;

  form: FormGroup;
  location: FormGroup;
  class: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.initLocation();
    this.initCategory();

    this.form = new FormGroup({
      location: this.location,
      class: this.class
    });
  }

  initLocation(): void {
    this.location = new FormGroup({
      city: new FormControl('', Validators.required),
      county: new FormControl('', Validators.required),
      address: new FormControl(''),
      uat: new FormControl('', Validators.required),
      sirutaCode: new FormControl('', Validators.required),
      ranCode: new FormControl('', Validators.required),
      toponym: new FormControl(''),
      sector: new FormControl('', Validators.required),
      campaignYear: new FormControl(''),
    });
  }

  initCategory(): void {
    this.class = new FormGroup({
      type: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  // Events

  onLocationBeforeNext(e: any): void {
    ValidationService.triggerValidation(this.location);
  }

  onCategoryBeforeNext(e: any): void {
    ValidationService.triggerValidation(this.class);
  }

  onComplete(e: any): void {

    this.isCompleted = true;

    const location = this.form.value;
    console.log(location);
  }

  // Methods

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
