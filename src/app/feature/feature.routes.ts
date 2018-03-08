import { FeatureComponent } from './feature.component';

export const routes = [
  { path: '', children: [
    { path: '', component: FeatureComponent, children: [
      { path: '', loadChildren: './main#MainModule' },
      { path: 'ran', loadChildren: './ran#RanModule' }
    ]}
  ]},
];
