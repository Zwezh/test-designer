import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SharedModule } from '@appSharedModule';

import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages';

@NgModule({
  imports: [
    SharedModule,
    LoginRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatSelectModule,
    MatCardModule
  ],
  declarations: [
    LoginPageComponent
  ]
})
export class LoginModule { }
