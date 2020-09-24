import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@appSharedModule';

import { CreateEditTeacherComponent } from './components';

const MATERAIL = [
  MatDialogModule,
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
    ...MATERAIL
  ],
  declarations: [CreateEditTeacherComponent],
  exports: [CreateEditTeacherComponent]
})
export class CreateEditTeacherModule { }
