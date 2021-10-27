import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from '@appSharedModule';

import { ConfirmationDialogComponent, PromptDialogComponent } from './components';

const MATERIAL = [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule];

@NgModule({
  imports: [SharedModule, ...MATERIAL],
  declarations: [ConfirmationDialogComponent, PromptDialogComponent],
  exports: [ConfirmationDialogComponent, PromptDialogComponent]
})
export class DialogModule {}
