import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ValidationService } from '@app/support';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent implements OnInit {

  isCompleted: boolean = false;
  siteTypes: string[] = ['Tip 1', 'Tip 2', 'Tip 3', 'Tip 4'];
  siteCategories: string[] = ['Categorie 1', 'Categorie 2', 'Categorie 3', 'Categorie 4'];
  sitePeriods: string[] = ['Perioada 1', 'Perioada 2', 'Perioada 3', 'Perioada 4', 'Perioada 5', 'Perioada 6', 'Perioada 7', 'Perioada 8'];
  siteEpochs: string[] = ['Epoca 1', 'Epoca 2', 'Epoca 3', 'Epoca 4', 'Epoca 5', 'Epoca 6', 'Epoca 7', 'Epoca 8'];

  form: FormGroup;
  location: FormGroup;
  chronology: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.initLocation();
    this.initChronology();

    this.form = new FormGroup({
      location: this.location,
      chronology: this.chronology
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

  initChronology(): void {
    this.chronology = new FormGroup({
      type: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
      periods: new FormControl('', Validators.required),
      epochs: new FormControl('', Validators.required)
    });
  }

  // Events

  onLocationBeforeNext(e: any): void {
    ValidationService.triggerValidation(this.location);
  }

  onChronologyBeforeNext(e: any): void {
    ValidationService.triggerValidation(this.chronology);
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
