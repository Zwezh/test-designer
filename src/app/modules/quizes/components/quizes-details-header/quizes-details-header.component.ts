import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '@appApi';
import { QuizesEventEmmited, QuizesEvents } from '@appModules/quizes/shared/models';

@Component({
  selector: 'td-quizes-details-header',
  templateUrl: './quizes-details-header.component.html',
  styleUrls: ['./quizes-details-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuizesDetailsHeaderComponent {
  @Input() quiz: Quiz;
  @Output() action: EventEmitter<QuizesEventEmmited> = new EventEmitter<QuizesEventEmmited>();

  onUpdateQuizProperties(): void {
    this.action.emit({ action: QuizesEvents.UPDATE, data: this.quiz });
  }
}
