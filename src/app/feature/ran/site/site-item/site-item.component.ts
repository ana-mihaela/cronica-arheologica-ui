import { Component, Input } from '@angular/core';
import { Site } from '@app/core/model';

@Component({
  selector: 'app-site-item',
  templateUrl: 'site-item.component.html'
})
export class SiteItemComponent {

  @Input() site: Site;
}
