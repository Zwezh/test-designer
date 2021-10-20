import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';

import { QuestionsApiService } from './questions-api.service';

@NgModule({
  imports: [DbModule],
  providers: [QuestionsApiService]
})
export class QuestionsApiModule { }
