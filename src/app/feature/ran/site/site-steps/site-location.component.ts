import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'app/support/index';

@Component({
  selector: 'app-site-location',
  templateUrl: 'site-location.component.html'
})
export class SiteLocationComponent implements OnInit {

  form: FormGroup;
  city: FormControl;
  county: FormControl;
  address: FormControl;
  uat: FormControl;
  sirutaCode: FormControl;
  ranCode: FormControl;
  toponym: FormControl;
  sector: FormControl;
  campaignYear: FormControl;

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.form = new FormGroup({
      city: this.city,
      county: this.county,
      address: this.address,
      uat: this.uat,
      sirutaCode: this.sirutaCode,
      ranCode: this.ranCode,
      toponym: this.toponym,
      sector: this.sector,
      campaignYear: this.campaignYear,
    });
  }

  createFormControls() {
    this.city = new FormControl('', Validators.required);
    this.county = new FormControl('', Validators.required);
    this.address = new FormControl('');
    this.uat = new FormControl('', Validators.required);
    this.sirutaCode = new FormControl('', Validators.required);
    this.ranCode = new FormControl('', Validators.required);
    this.toponym = new FormControl('');
    this.sector = new FormControl('', Validators.required);
    this.campaignYear = new FormControl('');
  }

  public triggerValidation(): void {
    ValidationService.triggerValidation(this.form);
  }
}
