import { Topic } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionActionTypes } from '../types';


export const getTopicListAction = createAction(
  QuestionActionTypes.GET_TOPIC_LIST,
  props<{ quizId: number }>()
);
export const getTopicListSuccessAction = createAction(
  QuestionActionTypes.GET_TOPIC_LIST_SUCCESS,
  props<{ topicList: Topic[] }>()
);
export const getTopicListFailureAction = createAction(
  QuestionActionTypes.GET_TOPIC_LIST_FAILURE
);
