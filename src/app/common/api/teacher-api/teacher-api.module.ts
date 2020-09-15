import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';

import { TeacherApiService } from './teacher-api.service';

@NgModule({
  imports: [
    DbModule
  ],
  providers: [TeacherApiService]
})
export class TeacherApiModule { }
