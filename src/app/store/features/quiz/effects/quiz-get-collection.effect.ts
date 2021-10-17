import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuizCollectionAction,
  getQuizCollectionFailureAction,
  getQuizCollectionSuccessAction
} from '../actions';

@Injectable()
export class QuizGetCollectionEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private persistanceService: PersistanceService
  ) {}

  getCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizCollectionAction),
      switchMap(() =>
        this.quizesApi
          .getAllQuiz$(+this.persistanceService.get(PersistanceKeys.authKey))
          .pipe(
            map((quizCollection: Quiz[]) =>
              getQuizCollectionSuccessAction({ quizCollection })
            ),
            catchError(() => of(getQuizCollectionFailureAction()))
          )
      )
    )
  );
}
