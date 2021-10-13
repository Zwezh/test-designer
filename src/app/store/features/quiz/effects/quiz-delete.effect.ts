import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  deleteQuizAction,
  deleteQuizFailureAction,
  deleteQuizSuccessAction
} from '../actions';

@Injectable()
export class QuizDeleteEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
  ) { }

  quizQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteQuizAction),
      switchMap(({ id }) =>
        this.quizesApi.deleteQuiz$(id)
          .pipe(
            map((quizCollection: Quiz[]) => deleteQuizSuccessAction({ quizCollection })),
            catchError(() => of(deleteQuizFailureAction()))
          )
      )
    )
  );
}
