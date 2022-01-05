import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  addQuizAction,
  addQuizFailureAction,
  addQuizSuccessAction
} from '../actions';

@Injectable()
export class QuizAddEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private persistanceService: PersistanceService
  ) {}

  addQuiz$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addQuizAction),
      switchMap(({ quiz }) =>
        this.quizesApi
          .addQuiz$(
            { ...quiz, createdDate: new Date(), modifiedDate: new Date() },
            +this.persistanceService.get(PersistanceKeys.authKey)
          )
          .pipe(
            map((newQuiz: Quiz) => addQuizSuccessAction({ newQuiz })),
            catchError(() => of(addQuizFailureAction()))
          )
      )
    )
  );
}
