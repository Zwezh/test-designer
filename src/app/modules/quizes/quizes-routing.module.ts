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
    children: [
      {
        path: '',
        component: QuizDetailsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'questions',
        loadChildren: () => import('@appModules/question').then((m) => m.QuestionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule { }
