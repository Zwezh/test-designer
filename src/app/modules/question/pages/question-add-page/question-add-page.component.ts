import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

import { addQuestionAction } from '../../../../store/features/question';
import { QuestionDetailsForm } from '../../../question/shared';

@Component({
  templateUrl: './question-add-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAddPageComponent {

  readonly quizId: number;
  form = new QuestionDetailsForm();

    constructor(
    route: ActivatedRoute,
    private store: Store) {
      this.quizId = +route.snapshot.params.id;
    }

  onAddQuestion(): void {
    this.store.dispatch(addQuestionAction({question: this.form.questionFromForm, quizId: this.quizId }));
  }

}
