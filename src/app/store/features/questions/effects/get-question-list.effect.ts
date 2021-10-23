import { Injectable } from '@angular/core';
import { Question, QuestionsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  getQuestionListAction,
  getQuestionListFailureAction,
  getQuestionListSuccessAction
} from '../actions';

@Injectable()
export class GetQuestionListEffect {
  constructor(
    private actions$: Actions,
    private questionApi: QuestionsApiService
  ) {}

  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getQuestionListAction),
      switchMap(({ quizId }) =>
        this.questionApi.getAllQuestions$(quizId).pipe(
          map((questionList: Question[]) =>
            getQuestionListSuccessAction({ questionList })
          ),
          catchError(() => of(getQuestionListFailureAction()))
        )
      )
    )
  );
}
