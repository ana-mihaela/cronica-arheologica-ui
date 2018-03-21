import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent {

  locationForm: FormGroup;
  isCompleted: boolean = false;

  constructor() {

    this.locationForm = new FormGroup({
      city: new FormControl('', [Validators.required]),
      county: new FormControl('', [Validators.required]),
      address: new FormControl(''),
      uat: new FormControl('', [Validators.required]),
      sirutaCode: new FormControl('', [Validators.required]),
      ranCode: new FormControl('', [Validators.required]),
      toponym: new FormControl(''),
      sector: new FormControl('', [Validators.required]),
      campaignYear: new FormControl('', [Validators.required]),
    });
  }

  public onStep1Next(event: any): void { }

  public onStep2Next(event: any): void { }

  public onStep3Next(event: any): void { }

  public onComplete(event: any): void {
    this.isCompleted = true;
  }
}
