import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { ConfirmationDialogComponent } from './components';

const MATERIAL = [
  MatButtonModule,
  MatDialogModule
];

@NgModule({

  imports: [
    TranslateModule,
    ...MATERIAL
  ],
  declarations: [ConfirmationDialogComponent],
  exports: [ConfirmationDialogComponent]
})
export class DialogModule { }
