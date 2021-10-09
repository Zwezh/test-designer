import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsAddPageComponent, TestsPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent
  },
  {
    path: 'add',
    pathMatch: 'full',
    component: TestsAddPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule {}
