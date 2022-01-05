import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';

import { TeachersApiService } from './teachers-api.service';

@NgModule({
  imports: [
    DbModule
  ],
  providers: [TeachersApiService]
})
export class TeachersApiModule { }
