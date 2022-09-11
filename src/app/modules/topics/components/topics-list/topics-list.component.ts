import { ChangeDetectionStrategy, Component, Input, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { TopicModel } from '@appStore';

@Component({
  selector: 'td-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsListComponent {

  @Input() topicList: TopicModel[];
  @ViewChild(MatAccordion) accordion: MatAccordion;


  trackByTopic(index: number, item: TopicModel): number {
    return item.id;
  }
}
