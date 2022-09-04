import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { updateQuestionAction, updateQuestionFailureAction, updateQuestionSuccessAction } from '../actions';


@Injectable()
export class UpdateQuestionEffect {
  constructor(
    private actions$: Actions,
    private questionsApi: QuestionsApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  addQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateQuestionAction),
      switchMap(({ question }) =>
        this.questionsApi.updateQuestion$(question).pipe(
          map(() => updateQuestionSuccessAction({quizId: question.quizId})),
          catchError(() => of(updateQuestionFailureAction()))
        )
      )
    )
  );

  redirectAfterAddQuestion = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateQuestionSuccessAction),
        tap(({ quizId }) => this.router.navigate(['/quizes', quizId], { relativeTo: this.activatedRoute }))
      ), { dispatch: false }
  );
}
