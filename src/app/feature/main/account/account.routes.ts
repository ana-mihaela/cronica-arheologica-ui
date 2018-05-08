import { AccountComponent } from './account.component';
import { RegisterComponent } from './register/register.component';

export const routes = [
  { path: '', children: [
      { path: '', component: AccountComponent },
      { path: 'register', component: RegisterComponent }
    ]},
];
