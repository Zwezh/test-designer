import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@appSharedModule';

import { RegistrationPageComponent } from './pages';
import { RegistrationRoutingModule } from './registration-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RegistrationRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule
  ],
  declarations: [RegistrationPageComponent]
})
export class RegistrationModule { }
