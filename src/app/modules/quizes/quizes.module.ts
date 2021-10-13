import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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

import { QuizesActionsComponent, QuizesListComponent } from './components';
import { QuizesPageComponent } from './pages';
import { QuizesRoutingModule } from './quizes-routing.module';
import { QuizPropertiesEditorModule } from '@appModules/quiz-properties-editor';
import { MatInputModule } from '@angular/material/input';

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
    QuizesRoutingModule,
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
    QuizesPageComponent,
    QuizesListComponent,
    QuizesActionsComponent
  ]
})
export class QuizesModule { }
