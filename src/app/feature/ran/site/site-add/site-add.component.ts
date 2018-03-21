import { Component, OnInit, ViewChild } from '@angular/core';
import { SiteLocationComponent } from '../site-steps/site-location.component';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent implements OnInit {

  isCompleted: boolean = false;
  locationStatus: boolean = false;

  @ViewChild('step1') locationStep: SiteLocationComponent;

  ngOnInit(): void {
    this.initEvents();
  }

  public initEvents(): void {
    this.locationStep.form.statusChanges.subscribe(status => this.locationStatus = status);
  }

  public onLocationBeforeNext(event: any): void {
    this.locationStep.triggerValidation();
  }

  public onComplete(event: any): void {

    const location = this.locationStep.form.value;
    this.isCompleted = true;

    console.log(location);
  }
}
