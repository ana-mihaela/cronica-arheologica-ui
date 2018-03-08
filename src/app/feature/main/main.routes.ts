import { MainComponent } from './main.component';
import { HomeComponent } from './home';

export const routes = [
  { path: '', children: [
    { path: '', component: MainComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'account', loadChildren: './account#AccountModule' }
    ]}
  ]},
];
