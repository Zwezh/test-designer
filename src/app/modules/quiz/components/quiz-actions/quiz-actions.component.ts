import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { QuizEventEmmited, QuizEvents } from '@appModules/quiz/shared/models';

@Component({
  selector: 'td-quiz-actions',
  templateUrl: './quiz-actions.component.html',
  styleUrls: ['./quiz-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizActionsComponent {
  @Input() value: string;
  @Output() action: EventEmitter<QuizEventEmmited> =
    new EventEmitter<QuizEventEmmited>();

  onSearch(data: string): void {
    this.action.emit({ action: QuizEvents.SEARCH, data });
  }

  onAddQuestion(): void {
    this.action.emit({ action: QuizEvents.ADD });
  }
}
