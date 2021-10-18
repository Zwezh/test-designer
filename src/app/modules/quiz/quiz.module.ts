import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuizesApiModule, TeachersApiModule } from '@appApi';
import { QuizPropertiesEditorModule } from '@appModules/quiz-properties-editor';
import { SearchModule } from '@appPipes/search';
import { SharedModule } from '@appSharedModule';
import { QuizGetOneEffect, quizReducers } from '@appStore';
import { DialogModule } from '@appUI/dialog';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { QuestionsModule } from '../questions/questions.module';

import { QuizActionsComponent } from './components';
import { QuizPageComponent } from './pages';
import { QuizRoutingModule } from './quiz-routing.module';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
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
    QuizRoutingModule,
    TeachersApiModule,
    QuizesApiModule,
    QuestionsModule,
    EffectsModule.forFeature([QuizGetOneEffect]),
    StoreModule.forFeature('quiz', quizReducers),
    SearchModule,
    DialogModule,
    QuizPropertiesEditorModule,
    ...MATERIAL
  ],
  declarations: [QuizPageComponent, QuizActionsComponent]
})
export class QuizModule {}
