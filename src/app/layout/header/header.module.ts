import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TeacherMenuModule } from '@appLayouts/teacher-menu';
import { TranslateModule } from '@ngx-translate/core';

import { HeaderComponent } from './header.component';
@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    MatToolbarModule,
    TeacherMenuModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
