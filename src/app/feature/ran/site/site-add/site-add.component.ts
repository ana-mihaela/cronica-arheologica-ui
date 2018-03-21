import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent {

  locationForm: FormGroup;
  city: FormControl;
  county: FormControl;
  address: FormControl;
  uat: FormControl;
  sirutaCode: FormControl;
  ranCode: FormControl;
  toponym: FormControl;
  sector: FormControl;
  campaignYear: FormControl;

  isCompleted: boolean = false;

  constructor() {

    this.createFormControls();
    this.createForm();
  }

  createForm() {
    this.locationForm = new FormGroup({
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
    this.campaignYear = new FormControl('', Validators.required);
  }

  public onStep1Next(event: any): void { }

  public onStep2Next(event: any): void { }

  public onStep3Next(event: any): void { }

  public onComplete(event: any): void {
    this.isCompleted = true;
  }
}
