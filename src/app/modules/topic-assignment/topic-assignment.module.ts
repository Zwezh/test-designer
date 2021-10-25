import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopicAssignmentComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [TopicAssignmentComponent],
  exports: [TopicAssignmentComponent]
})
export class TopicAssignmentModule {}
