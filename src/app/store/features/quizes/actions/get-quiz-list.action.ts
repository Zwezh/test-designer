import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const getQuizListAction = createAction(QuizesActionTypes.GET_QUIZ_LIST);
export const getQuizListSuccessAction = createAction(
  QuizesActionTypes.GET_QUIZ_LIST_SUCCESS,
  props<{ quizList: Quiz[] }>()
);
export const getQuizListFailureAction = createAction(
  QuizesActionTypes.GET_QUIZ_LIST_FAILURE
);
