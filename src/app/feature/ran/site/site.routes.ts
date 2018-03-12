import { SiteListComponent } from './site-list/site-list.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SiteListComponent }
  ]},
];
