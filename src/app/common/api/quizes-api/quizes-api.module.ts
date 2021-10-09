import { NgModule } from '@angular/core';
import { DbModule } from '@appDBModule';
import { QuizesApiService } from './quizes-api.service';

@NgModule({
  imports: [DbModule],
  providers: [QuizesApiService]
})
export class QuizesApiModule {}
