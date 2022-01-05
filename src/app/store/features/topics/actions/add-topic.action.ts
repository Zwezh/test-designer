import { Topic } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { TopicsActionTypes } from '../types';

export const addTopicAction = createAction(TopicsActionTypes.ADD_TOPIC, props<{ topic: Partial<Topic> }>());
export const addTopicSuccessAction = createAction(TopicsActionTypes.ADD_TOPIC_SUCCESS, props<{ topicList: Topic[] }>());
export const addTopicFailureAction = createAction(TopicsActionTypes.GET_TOPIC_LIST_FAILURE);
