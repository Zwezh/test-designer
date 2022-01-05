import { Injectable } from '@angular/core';
import { Quiz, QuizesApiService } from '@appApi';
import { PersistanceKeys } from '@appConstants';
import { PersistanceService } from '@appServices';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuizListAction,
  getQuizListFailureAction,
  getQuizListSuccessAction
} from '../actions';

@Injectable()
export class GetQuizListEffect {
  constructor(
    private actions$: Actions,
    private quizesApi: QuizesApiService,
    private persistanceService: PersistanceService
  ) {}

  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuizListAction),
      switchMap(() =>
        this.quizesApi
          .getAllQuiz$(+this.persistanceService.get(PersistanceKeys.authKey))
          .pipe(
            map((quizList: Quiz[]) => getQuizListSuccessAction({ quizList })),
            catchError(() => of(getQuizListFailureAction()))
          )
      )
    )
  );
}
