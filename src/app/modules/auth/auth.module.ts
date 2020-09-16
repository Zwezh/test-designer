import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TeachersApiModule } from '@appApi';
import { SharedModule } from '@appSharedModule';

import { LoginService } from './shared/services';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent, RegistrationPageComponent } from './pages';

const MATERAIL = [
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatSelectModule,
  MatCardModule,
  TeachersApiModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AuthRoutingModule,
    ...MATERAIL
  ],
  declarations: [LoginPageComponent, RegistrationPageComponent],
  providers: [LoginService]
})
export class AuthModule { }
