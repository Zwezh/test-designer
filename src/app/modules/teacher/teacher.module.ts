import { NgModule } from '@angular/core';
import { SharedModule } from '@appSharedModule';

import { TeacherPageComponent } from './pages';
import { TeacherRoutingModule } from './teacher-routing.module';


@NgModule({
  imports: [
    SharedModule,
    TeacherRoutingModule
  ],
  declarations: [
    TeacherPageComponent
  ]
})
export class TeacherModule { }
