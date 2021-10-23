import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { updateQuizAction, updateQuizFailureAction, updateQuizSuccessAction } from '../actions';

@Injectable()
export class UpdateQuizEffect {
  constructor(private actions$: Actions, private quizesApi: QuizesApiService) {}

  updateQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateQuizAction),
      switchMap(({ quiz }) =>
        this.quizesApi.updateQuiz$({ ...quiz, modifiedDate: new Date() }).pipe(
          map((quizList: Quiz[]) => updateQuizSuccessAction({ quizList })),
          catchError(() => of(updateQuizFailureAction()))
        )
      )
    )
  );
}
