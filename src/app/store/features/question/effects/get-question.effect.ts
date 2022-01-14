import { Injectable } from '@angular/core';
import { Question, QuestionsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuestionAction,
  getQuestionFailureAction,
  getQuestionSuccessAction
} from '../actions';

@Injectable()
export class GetQuestionEffect {

  constructor(private actions$: Actions, private questionApi: QuestionsApiService) {
  }

  getQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuestionAction),
      switchMap(({questionId}) =>
        this.questionApi.getQuestion$(questionId).pipe(
          map((question: Question) =>
            getQuestionSuccessAction({question})
          ),
          catchError(() => of(getQuestionFailureAction()))
        )
      )
    )
  );
}

