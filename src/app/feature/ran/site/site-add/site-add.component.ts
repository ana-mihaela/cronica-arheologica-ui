import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService } from '@app/support';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent implements OnInit {

  isCompleted: boolean = false;
  locationForm: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.locationForm = new FormGroup({
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

  public onLocationBeforeNext(event: any): void {
    ValidationService.triggerValidation(this.locationForm);
  }

  public onComplete(event: any): void {

    this.isCompleted = true;

    const location = this.locationForm.value;
    console.log(location);
  }
}
