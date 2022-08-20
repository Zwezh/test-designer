import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { addQuestionAction } from '../../../../store/features/question';
import { QuestionDetailsForm } from '../../../question/shared';

@Component({
  templateUrl: './question-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAddPageComponent {

  form = new QuestionDetailsForm();

  constructor(private store: Store) {
  }

  onAddQuestion(quizId: number): void {
    this.store.dispatch(addQuestionAction({question: this.form.questionFromForm, quizId}));
  }

}
