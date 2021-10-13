import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizesPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: QuizesPageComponent
  },
  // {
  //   path: 'add',
  //   pathMatch: 'full',
  //   component: QuizPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule {}
