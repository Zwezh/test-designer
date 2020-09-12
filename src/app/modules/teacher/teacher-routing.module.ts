import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';

import { TeacherPageComponent } from './pages';

// import {
//   TeachersDetailsPageComponent,
//   TeachersMainPageComponent
// } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TeacherPageComponent,
    pathMatch: 'full'
  }
  // {
  //   path: ':id',
  //   component: TeachersDetailsPageComponent,
  // }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class TeacherRoutingModule { }
