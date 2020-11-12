import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsPageComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: TestsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestsRoutingModule {}
