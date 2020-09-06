import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { TeachersMainPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TeachersMainPageComponent,
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
export class TeachersRoutingModule { }
