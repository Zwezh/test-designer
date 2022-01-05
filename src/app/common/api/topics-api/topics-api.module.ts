import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';

import { TopicsApiService } from './topics-api.service';

@NgModule({
  imports: [DbModule],
  providers: [TopicsApiService]
})
export class TopicsApiModule { }
