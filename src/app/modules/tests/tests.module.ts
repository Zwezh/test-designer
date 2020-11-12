import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { TeachersApiModule } from '@appApi';
import { SharedModule } from '@appSharedModule';

import { TestsListComponent } from './components';
import { TestsPageComponent } from './pages';
import { TestsRoutingModule } from './tests-routing.module';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule
];

@NgModule({
  imports: [SharedModule, TestsRoutingModule, TeachersApiModule, ...MATERIAL],
  declarations: [TestsPageComponent, TestsListComponent]
})
export class TestsModule {}
