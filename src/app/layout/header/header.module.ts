import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TeacherModule } from '@appLayouts/teacher';
import { TeacherBarModule } from '@appLayouts/teacher-bar';
import {
  authReducers,
  GetCurrentTeacherEffect,
  LogoutEffect,
  UpdateCurrentTeacherEffect
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    TeacherBarModule,
    TeacherModule,
    StoreModule.forFeature('auth', authReducers),
    EffectsModule.forFeature([
      LogoutEffect,
      GetCurrentTeacherEffect,
      UpdateCurrentTeacherEffect
    ])
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule {}
