import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@appServices';

import { QuizesPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: QuizesPageComponent
  },
  {
    path: ':id',
    loadChildren: () =>
      import('../quiz/quiz.module').then((m) => m.QuizModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule {}
