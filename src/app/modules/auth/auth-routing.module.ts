import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { LoginPageComponent, RegistrationPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginPageComponent,

  },
  {
    path: 'registration',
    component: RegistrationPageComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
