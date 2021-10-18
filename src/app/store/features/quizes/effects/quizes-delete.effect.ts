import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  deleteQuizesAction,
  deleteQuizesFailureAction,
  deleteQuizesSuccessAction
} from '../actions';

@Injectable()
export class QuizesDeleteEffect {
  constructor(private actions$: Actions, private quizesApi: QuizesApiService) {}

  quizQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteQuizesAction),
      switchMap(({ id }) =>
        this.quizesApi.deleteQuiz$(id).pipe(
          map((quizCollection: Quiz[]) =>
            deleteQuizesSuccessAction({ quizCollection })
          ),
          catchError(() => of(deleteQuizesFailureAction()))
        )
      )
    )
  );
}
