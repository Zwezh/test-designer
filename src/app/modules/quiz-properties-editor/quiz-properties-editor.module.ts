import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@appSharedModule';

import { QuizPropertiesEditorComponent } from './components';

const MATERIAL = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule
];

@NgModule({
  imports: [SharedModule, ...MATERIAL],
  declarations: [QuizPropertiesEditorComponent],
  exports: [QuizPropertiesEditorComponent]
})
export class QuizPropertiesEditorModule {}
