import { RanComponent } from './ran.component';

export const routes = [
  { path: '', children: [
    { path: '', component: RanComponent, children: [
      { path: 'site', loadChildren: './site#SiteModule' }
    ]}
  ]},
];
