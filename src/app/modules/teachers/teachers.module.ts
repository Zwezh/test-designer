import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@appSharedModule';

import { TeachersAddComponent } from './components';
import { TeachersMainPageComponent } from './pages';
import { TeachersRoutingModule } from './teachers-routing.module';

@NgModule({
  imports: [
    SharedModule,
    TeachersRoutingModule,
    MatToolbarModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
  ],
  declarations: [
    TeachersMainPageComponent,
    TeachersAddComponent
  ]
})
export class TeachersModule { }
