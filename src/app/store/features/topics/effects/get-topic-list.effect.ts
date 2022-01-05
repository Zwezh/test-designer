import { Injectable } from '@angular/core';
import { Topic, TopicsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { getTopicListAction, getTopicListFailureAction, getTopicListSuccessAction } from '../actions';

@Injectable()
export class GetTopicListEffect {
  constructor(
    private actions$: Actions,
    private topicsApi: TopicsApiService,
  ) {}

  getList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTopicListAction),
      switchMap(({ quizId }) =>
        this.topicsApi.getAllTopics$(quizId).pipe(
          map((topicList: Topic[]) => getTopicListSuccessAction({ topicList })),
          catchError(() => of(getTopicListFailureAction()))
        )
      )
    )
  );
}
