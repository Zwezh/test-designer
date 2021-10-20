import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const getOneQuizAction = createAction(
  QuizesActionTypes.GET_ONE_QUIZ,
  props<{ id: number }>()
);
export const getOneQuizSuccessAction = createAction(
  QuizesActionTypes.GET_ONE_QUIZ_SUCCESS,
  props<{ quiz: Quiz }>()
);
export const getOneQuizFailureAction = createAction(
  QuizesActionTypes.GET_ONE_QUIZ_FAILURE
);
