import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TopicsApiModule } from '@appApi';
import { SharedModule } from '@appSharedModule';
import { GetTopicListEffect, topicsReducers } from '@appStore';
import { DialogModule } from '@appUI/dialog';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TopicAssignmentComponent } from './components';

const MATERIAL = [
  MatButtonModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [
    SharedModule,
    TopicsApiModule,
    EffectsModule.forFeature([GetTopicListEffect]),
    StoreModule.forFeature('topics', topicsReducers),
    DialogModule,
    ...MATERIAL
  ],
  declarations: [TopicAssignmentComponent],
  exports: [TopicAssignmentComponent]
})
export class TopicAssignmentModule {}
