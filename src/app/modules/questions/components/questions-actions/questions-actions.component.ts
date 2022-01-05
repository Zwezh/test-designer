import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  QuestionsEventEmmited,
  QuestionsEvents
} from '@appModules/questions/shared/models';

@Component({
  selector: 'td-questions-actions',
  templateUrl: './questions-actions.component.html',
  styleUrls: ['./questions-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsActionsComponent {
  @Input() value: string;
  @Output() action: EventEmitter<QuestionsEventEmmited> =
    new EventEmitter<QuestionsEventEmmited>();

  onSearch(data: string): void {
    this.action.emit({ action: QuestionsEvents.SEARCH, data });
  }

  onAddQuestion(): void {
    this.action.emit({ action: QuestionsEvents.ADD });
  }
}
