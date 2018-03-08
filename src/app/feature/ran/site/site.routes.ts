import { SiteComponent } from './site.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SiteComponent }
  ]},
];
