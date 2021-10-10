import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuizesApiModule, TeachersApiModule } from '@appApi';
import { SearchModule } from '@appPipes/search';
import { SharedModule } from '@appSharedModule';
import {
  QuizAddEffect,
  QuizGetCollectionEffect,
  quizReducers
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { QuestionsModule } from '../questions/questions.module';

import { TestsListComponent } from './components';
import { TestsActionsComponent } from './components/tests-actions/tests-actions.component';
import { TestsAddDialogComponent } from './components/tests-add-dialog/tests-add-dialog.component';
import { TestsAddPageComponent, TestsPageComponent } from './pages';
import { TestsRoutingModule } from './tests-routing.module';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule
];

@NgModule({
  imports: [
    SharedModule,
    TestsRoutingModule,
    TeachersApiModule,
    QuizesApiModule,
    QuestionsModule,
    EffectsModule.forFeature([QuizAddEffect, QuizGetCollectionEffect]),
    StoreModule.forFeature('quiz', quizReducers),
    SearchModule,
    ...MATERIAL
  ],
  declarations: [
    TestsPageComponent,
    TestsListComponent,
    TestsAddPageComponent,
    TestsActionsComponent,
    TestsAddDialogComponent]
})
export class TestsModule { }
