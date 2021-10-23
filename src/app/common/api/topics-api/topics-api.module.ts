import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';

import { TopicsApiService } from './Topics-api.service';

@NgModule({
  imports: [DbModule],
  providers: [TopicsApiService]
})
export class TopicsApiModule { }
