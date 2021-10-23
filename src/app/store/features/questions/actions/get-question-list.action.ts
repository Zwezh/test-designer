import { Question } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuestionsActionTypes } from '../types';

export const getQuestionListAction = createAction(
  QuestionsActionTypes.GET_QUESTION_LIST,
  props<{ quizId: number }>()
);
export const getQuestionListSuccessAction = createAction(
  QuestionsActionTypes.GET_QUESTION_LIST_SUCCESS,
  props<{ questionList: Question[] }>()
);
export const getQuestionListFailureAction = createAction(
  QuestionsActionTypes.GET_QUESTION_LIST_FAILURE
);
