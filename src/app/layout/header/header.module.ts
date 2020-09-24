import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CreateEditTeacherModule } from '@appLayouts/create-edit-teacher';
import { TeacherBarModule } from '@appLayouts/teacher-bar';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    TeacherBarModule,
    CreateEditTeacherModule,
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
