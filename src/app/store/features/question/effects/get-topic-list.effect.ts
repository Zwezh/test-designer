import { Injectable } from '@angular/core';
import { Topic, TopicsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { getTopicListAction, getTopicListFailureAction, getTopicListSuccessAction } from '../actions';

@Injectable()
export class GetTopicListEffect {

  constructor(private actions$: Actions, private topicApi: TopicsApiService) {
  }

  getTopicList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getTopicListAction),
      switchMap(({quizId}) =>
        this.topicApi.getAllTopics$(quizId).pipe(
          map((topicList: Topic[]) =>
            getTopicListSuccessAction({topicList})
          ),
          catchError(() => of(getTopicListFailureAction()))
        )
      )
    )
  );
}
