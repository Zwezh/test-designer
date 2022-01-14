import { Injectable } from '@angular/core';
import { Topic, TopicsApiService } from '@appApi';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { addTopicAction, addTopicFailureAction, addTopicSuccessAction } from '../actions';

@Injectable()
export class AddTopicEffect {
  constructor(private actions$: Actions, private topicApi: TopicsApiService) {}

  addTopic$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTopicAction),
      switchMap(({ topic }) =>
        this.topicApi.addTopic$(topic).pipe(
          map((result: Topic) => addTopicSuccessAction({ topic: result })),
          catchError(() => of(addTopicFailureAction()))
        )
      )
    )
  );
}
