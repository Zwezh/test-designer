import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TeachersApiModule } from '@appApi';
import { SharedModule } from '@appSharedModule';

import { TeacherService } from './shared/services';

import { TeacherTestsListComponent } from './components';
import { TeacherPageComponent } from './pages';
import { TeacherRoutingModule } from './teacher-routing.module';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [
    SharedModule,
    TeacherRoutingModule,
    TeachersApiModule,
    ...MATERIAL
  ],
  declarations: [
    TeacherPageComponent,
    TeacherTestsListComponent
  ],
  providers: [TeacherService]
})
export class TeacherModule { }
