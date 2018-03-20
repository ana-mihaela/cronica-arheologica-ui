import { Component } from '@angular/core';

@Component({
  selector: 'app-site-add',
  templateUrl: 'site-add.component.html'
})
export class SiteAddComponent {

  isCompleted: boolean = false;

  public onStep1Next(event: any): void { }

  public onStep2Next(event: any): void { }

  public onStep3Next(event: any): void { }

  public onComplete(event: any): void {
    this.isCompleted = true;
  }
}
