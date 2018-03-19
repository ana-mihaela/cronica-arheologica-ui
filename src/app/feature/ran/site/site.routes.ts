import { SiteListComponent } from './site-list/site-list.component';
import { SiteItemComponent } from './site-item/site-item.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SiteListComponent },
    { path: 'site/:id', component: SiteItemComponent },
    { path: 'site/add', component: SiteItemComponent },
  ]},
];
