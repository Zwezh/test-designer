import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuizAction,
  getQuizFailureAction,
  getQuizSuccessAction
} from '../actions';

@Injectable()
export class QuizGetOneEffect {
  constructor(private actions$: Actions, private quizesApi: QuizesApiService) {}

  getQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizAction),
      switchMap(({ id }) =>
        this.quizesApi.getQuiz$(id).pipe(
          map((quiz: Quiz) => getQuizSuccessAction({ quiz })),
          catchError(() => of(getQuizFailureAction()))
        )
      )
    )
  );
}
