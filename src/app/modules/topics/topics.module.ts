import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TopicsListComponent } from './components';

@NgModule({
  imports: [CommonModule],
  declarations: [TopicsListComponent],
  exports: [TopicsListComponent]
})
export class TopicsModule {}
