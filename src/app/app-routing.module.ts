import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@appServices';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/quizes',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth').then((m) => m.AuthModule)
  },
  {
    path: 'quizes',
    loadChildren: () =>
      import('./modules/quizes').then((m) => m.QuizesModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/quizes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
