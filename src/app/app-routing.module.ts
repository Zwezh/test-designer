import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@appServices';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'teacher',
    loadChildren: () => import('./modules/teacher/teacher.module').then((m) => m.TeacherModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/auth'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
