import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionAddPageComponent} from '@appModules/question/pages/question-add-page/question-add-page.component';
import {QuestionEditPageComponent} from '@appModules/question/pages/question-edit-page/question-edit-page.component';

const routes: Routes = [
  {
    path: 'add',
    component: QuestionAddPageComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: QuestionEditPageComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '..'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule {
}
