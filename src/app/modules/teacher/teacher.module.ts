import { NgModule } from '@angular/core';
import { TeachersApiModule } from '@appApi';
import { SharedModule } from '@appSharedModule';

import { TeacherService } from './shared/services';

import { TeacherPageComponent } from './pages';
import { TeacherRoutingModule } from './teacher-routing.module';


@NgModule({
  imports: [
    SharedModule,
    TeacherRoutingModule,
    TeachersApiModule
  ],
  declarations: [
    TeacherPageComponent
  ],
  providers: [TeacherService]
})
export class TeacherModule { }
