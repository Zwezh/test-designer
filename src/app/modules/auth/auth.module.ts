import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TeachersApiModule } from '@appApi';
import { TeacherModule } from '@appLayouts/teacher';
import { SharedModule } from '@appSharedModule';
import {
  authReducers,
  GetCurrentTeacherEffect,
  GetTeacherCollectionEffect,
  LoginEffect,
  LogoutEffect,
  RegisterEffect
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages';

const MATERAIL = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatSelectModule,
  MatCardModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    TeacherModule,
    TeachersApiModule,
    EffectsModule.forFeature([
      GetTeacherCollectionEffect,
      RegisterEffect,
      LoginEffect,
      LogoutEffect,
      GetCurrentTeacherEffect
    ]),
    StoreModule.forFeature('auth', authReducers),
    ...MATERAIL
  ],
  declarations: [LoginPageComponent]
})
export class AuthModule {}
