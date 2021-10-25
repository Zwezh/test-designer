import { Topic } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { TopicsActionTypes } from '../types';

export const getTopicListAction = createAction(TopicsActionTypes.GET_TOPIC_LIST, props<{ quizId: number }>());
export const getTopicListSuccessAction = createAction(
  TopicsActionTypes.GET_TOPIC_LIST_SUCCESS,
  props<{ topicList: Topic[] }>()
);
export const getTopicListFailureAction = createAction(TopicsActionTypes.GET_TOPIC_LIST_FAILURE);
