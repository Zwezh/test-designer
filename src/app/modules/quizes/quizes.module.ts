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
import { QuestionsApiModule, QuizesApiModule, TeachersApiModule, TopicsApiModule } from '@appApi';
import { TopicsModule } from '@appModules/topics';
import { SearchModule } from '@appPipes/search';
import { SharedModule } from '@appSharedModule';
import {
  DeleteQuizEffect,
  GetOneQuizEffect,
  GetQuizListEffect,
  QuizAddEffect,
  quizesReducers,
  UpdateQuizEffect
} from '@appStore';
import { DialogModule } from '@appUI/dialog';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { QuizesDetailsHeaderComponent } from './components/quizes-details-header/quizes-details-header.component';

import { QuizesActionsComponent, QuizesListComponent, QuizesPropertiesEditorComponent } from './components';
import { QuizDetailsPageComponent, QuizesPageComponent } from './pages';
import { QuizesRoutingModule } from './quizes-routing.module';
import { QuestionsModule } from '@appModules/questions';

const MATERIAL = [
  MatButtonModule,
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDialogModule,
  MatCardModule
];

@NgModule({
  imports: [
    SharedModule,
    QuizesRoutingModule,
    TeachersApiModule,
    QuizesApiModule,
    TopicsApiModule,
    QuestionsApiModule,
    QuestionsModule,
    EffectsModule.forFeature([QuizAddEffect, GetQuizListEffect, UpdateQuizEffect, DeleteQuizEffect, GetOneQuizEffect]),
    StoreModule.forFeature('quizes', quizesReducers),
    SearchModule,
    DialogModule,
    TopicsModule,
    ...MATERIAL
  ],
  declarations: [
    QuizesPageComponent,
    QuizDetailsPageComponent,
    QuizesListComponent,
    QuizesActionsComponent,
    QuizesPropertiesEditorComponent,
    QuizesDetailsHeaderComponent
  ]
})
export class QuizesModule {}
