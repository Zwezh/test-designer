import { Injectable } from '@angular/core';
import { QuestionsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { deleteQuestionAction, deleteQuestionFailureAction, deleteQuestionSuccessAction } from '../actions';

@Injectable()
export class DeleteQuestionEffect {
  constructor(private actions$: Actions, private questionsApi: QuestionsApiService) {}

  deleteQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteQuestionAction),
      switchMap(({ id }) =>
        this.questionsApi.deleteQuestion$(id).pipe(
          map(() => deleteQuestionSuccessAction({id})),
          catchError(() => of(deleteQuestionFailureAction()))
        )
      )
    )
  );
}
