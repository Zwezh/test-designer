import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getOneQuizAction,
  getOneQuizFailureAction,
  getOneQuizSuccessAction
} from '../actions';

@Injectable()
export class GetOneQuizEffect {
  constructor(private actions$: Actions, private quizesApi: QuizesApiService) {}

  getQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getOneQuizAction),
      switchMap(({ id }) =>
        this.quizesApi.getQuiz$(id).pipe(
          map((quiz: Quiz) => getOneQuizSuccessAction({ quiz })),
          catchError(() => of(getOneQuizFailureAction()))
        )
      )
    )
  );
}
