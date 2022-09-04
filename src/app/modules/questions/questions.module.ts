import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@appSharedModule';

import { QuestionsListComponent } from './components';

const MATERIAL = [
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule, ...MATERIAL],
  declarations: [QuestionsListComponent],
  exports: [QuestionsListComponent]
})
export class QuestionsModule {}
