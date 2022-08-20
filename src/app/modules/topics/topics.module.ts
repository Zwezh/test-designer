import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { QuestionsModule } from '@appModules/questions';
import { SharedModule } from '@appSharedModule';

import { TopicsListComponent } from './components';

const MATERIAL = [
  MatButtonModule,
  MatExpansionModule,
  MatIconModule
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ...MATERIAL,
    QuestionsModule
  ],
  declarations: [TopicsListComponent],
  exports: [TopicsListComponent]
})
export class TopicsModule {}
