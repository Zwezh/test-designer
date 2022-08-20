import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { addQuestionAction, addQuestionFailureAction, addQuestionSuccessAction } from '../actions';

@Injectable()
export class AddQuestionEffect {
  constructor(
    private actions$: Actions,
    private questionsApi: QuestionsApiService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  addQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addQuestionAction),
      switchMap(({question, quizId}) =>
        this.questionsApi.addQuestion$(question, quizId).pipe(
          map(() => addQuestionSuccessAction({quizId})),
          catchError(() => of(addQuestionFailureAction()))
        )
      )
    )
  );

  redirectAfterAddQuestion = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addQuestionSuccessAction),
        tap(({quizId}) => this.router.navigate(['/quizes', quizId], {relativeTo: this.activatedRoute}))
      ), {dispatch: false}
  );
}
