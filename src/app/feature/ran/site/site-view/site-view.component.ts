import { Component, Input } from '@angular/core';
import { Site } from '@app/core/model';

@Component({
  selector: 'app-site-item',
  templateUrl: 'site-view.component.html'
})
export class SiteViewComponent {

  @Input() site: Site;
}
