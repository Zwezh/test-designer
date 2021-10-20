import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizDetailsPageComponent, QuizesPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: QuizesPageComponent
  },
  {
    path: ':id',
    component: QuizDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule {}
