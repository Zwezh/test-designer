import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { QuizesEventEmmited, QuizesEvents } from '../../shared/models';

@Component({
  selector: 'td-quizes-actions',
  templateUrl: './quizes-actions.component.html',
  styleUrls: ['./quizes-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesActionsComponent {
  @Input() value: string;
  @Output() action: EventEmitter<QuizesEventEmmited> =
    new EventEmitter<QuizesEventEmmited>();

  onSearch(data: string): void {
    this.action.emit({ action: QuizesEvents.SEARCH, data });
  }

  onAddTest(): void {
    this.action.emit({ action: QuizesEvents.ADD });
  }
}
