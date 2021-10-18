import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizActionTypes } from '../types';

export const getQuizAction = createAction(
  QuizActionTypes.GET_QUIZ,
  props<{ id: number }>()
);
export const getQuizSuccessAction = createAction(
  QuizActionTypes.GET_QUIZ_SUCCESS,
  props<{ quiz: Quiz }>()
);
export const getQuizFailureAction = createAction(
  QuizActionTypes.GET_QUIZ_FAILURE
);
