import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TopicModel } from '@appStore';

@Component({
  selector: 'td-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopicsListComponent {
  @Input() topicList: TopicModel[];
}
