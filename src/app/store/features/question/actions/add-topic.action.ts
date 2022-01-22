import { Topic } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionActionTypes } from '../types';

export const addTopicAction = createAction(QuestionActionTypes.ADD_TOPIC, props<{ topic: Partial<Topic> }>());
export const addTopicSuccessAction = createAction(QuestionActionTypes.ADD_TOPIC_SUCCESS, props<{ topic: Topic }>());
export const addTopicFailureAction = createAction(QuestionActionTypes.ADD_TOPIC_FAILURE);
