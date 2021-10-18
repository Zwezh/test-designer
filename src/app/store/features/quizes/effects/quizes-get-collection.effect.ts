import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuizesCollectionAction,
  getQuizesCollectionFailureAction,
  getQuizesCollectionSuccessAction
} from '../actions';

@Injectable()
export class QuizesGetCollectionEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private persistanceService: PersistanceService
  ) {}

  getCollection$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizesCollectionAction),
      switchMap(() =>
        this.quizesApi
          .getAllQuiz$(+this.persistanceService.get(PersistanceKeys.authKey))
          .pipe(
            map((quizCollection: Quiz[]) =>
              getQuizesCollectionSuccessAction({ quizCollection })
            ),
            catchError(() => of(getQuizesCollectionFailureAction()))
          )
      )
    )
  );
}
