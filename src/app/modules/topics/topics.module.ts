import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import {
  GetTopicListEffect,
  topicsReducers
} from '@appStore';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { TopicsListComponent } from './components';

const MATERIAL = [
  MatButtonModule,
  MatExpansionModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    EffectsModule.forFeature([GetTopicListEffect]),
    StoreModule.forFeature('topics', topicsReducers),
    ...MATERIAL
  ],
  declarations: [TopicsListComponent],
  exports: [TopicsListComponent]
})
export class TopicsModule {}
