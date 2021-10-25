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
import { SharedModule } from '@appSharedModule';

import { QuestionsDetailsEditorComponent, QuestionsListComponent } from './components';
import { QuestionsDetailsPageComponent } from './pages';

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
  imports: [CommonModule, SharedModule, ...MATERIAL],
  declarations: [QuestionsListComponent, QuestionsDetailsPageComponent, QuestionsDetailsEditorComponent],
  exports: [QuestionsListComponent, QuestionsDetailsPageComponent]
})
export class QuestionsModule {}
