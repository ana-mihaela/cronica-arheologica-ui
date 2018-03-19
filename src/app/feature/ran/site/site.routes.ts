import { SiteListComponent } from './site-list/site-list.component';
import { SiteViewComponent } from './site-view/site-view.component';
import { SiteAddComponent } from './site-add/site-add.component';

export const routes = [
  { path: '', children: [
    { path: '', component: SiteListComponent },
    { path: 'site/add', component: SiteAddComponent },
    { path: 'site/:id', component: SiteViewComponent },
  ]},
];
