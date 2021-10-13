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
  QuizDeleteEffect,
  QuizGetCollectionEffect,
  quizReducers,
  QuizUpdateEffect
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { DialogModule } from '@appUI/dialog';
import { QuestionsModule } from '../questions/questions.module';

import { TestsActionsComponent, TestsListComponent } from './components';
import { TestsAddPageComponent, TestsPageComponent } from './pages';
import { TestsRoutingModule } from './tests-routing.module';
import { QuizPropertiesEditorModule } from '@appModules/quiz-properties-editor';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
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
    EffectsModule.forFeature([QuizAddEffect, QuizGetCollectionEffect, QuizUpdateEffect, QuizDeleteEffect]),
    StoreModule.forFeature('quiz', quizReducers),
    SearchModule,
    DialogModule,
    QuizPropertiesEditorModule,
    ...MATERIAL
  ],
  declarations: [
    TestsPageComponent,
    TestsListComponent,
    TestsAddPageComponent,
    TestsActionsComponent
  ]
})
export class TestsModule { }
