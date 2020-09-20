import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';

import { TeacherMenuComponent } from './components';

const MATERAIL = [
  MatButtonModule,
  MatMenuModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    ...MATERAIL
  ],
  declarations: [TeacherMenuComponent],
  exports: [TeacherMenuComponent]
})
export class TeacherMenuModule { }
