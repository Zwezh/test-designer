import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { QuestionDetailsEditorComponent } from '@appModules/question/components/question-details-editor/question-details-editor.component';
import { QuestionRoutingModule } from '@appModules/question/question-routing.module';
import { SharedModule } from '@appSharedModule';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  AddQuestionEffect,
  AddTopicEffect,
  GetQuestionEffect,
  GetTopicListEffect,
  questionReducers,
  UpdateQuestionEffect
} from '../../store/features/question';
import { QuestionAddPageComponent } from './pages/question-add-page/question-add-page.component';
import { QuestionEditPageComponent } from './pages/question-edit-page/question-edit-page.component';

const MATERIAL = [
  MatCardModule,
  MatSelectModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatToolbarModule,
  MatTooltipModule
];

const EFFECTS = [GetQuestionEffect, GetTopicListEffect, AddTopicEffect, AddQuestionEffect, UpdateQuestionEffect];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ...MATERIAL,
    QuestionRoutingModule,
    EffectsModule.forFeature(EFFECTS),
    StoreModule.forFeature('question', questionReducers),
  ],
  declarations: [
    QuestionAddPageComponent,
    QuestionEditPageComponent,
    QuestionDetailsEditorComponent
  ]
})
export class QuestionModule {
}
