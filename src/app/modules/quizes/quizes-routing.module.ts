import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsDetailsPageComponent } from '@appModules/questions';

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
        path: '/questions/add',
        component: QuestionsDetailsPageComponent,
        pathMatch: 'full'
      },
      {
        path: 'questions/:id',
        component: QuestionsDetailsPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizesRoutingModule {}
