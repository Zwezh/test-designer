import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  updateQuizesAction,
  updateQuizesFailureAction,
  updateQuizesSuccessAction
} from '../actions';

@Injectable()
export class QuizesUpdateEffect {
  constructor(private actions$: Actions, private quizesApi: QuizesApiService) {}

  updateQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateQuizesAction),
      switchMap(({ quiz }) =>
        this.quizesApi.updateQuiz$({ ...quiz, modifiedDate: new Date() }).pipe(
          map((quizCollection: Quiz[]) =>
            updateQuizesSuccessAction({ quizCollection })
          ),
          catchError(() => of(updateQuizesFailureAction()))
        )
      )
    )
  );
}
