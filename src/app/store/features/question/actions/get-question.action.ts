import { Question } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionActionTypes } from '../types';

export const getQuestionAction = createAction(
  QuestionActionTypes.GET_QUESTION,
  props<{ questionId: number }>()
);
export const getQuestionSuccessAction = createAction(
  QuestionActionTypes.GET_QUESTION_SUCCESS,
  props<{ question: Question }>()
);
export const getQuestionFailureAction = createAction(
  QuestionActionTypes.GET_QUESTION_FAILURE
);
