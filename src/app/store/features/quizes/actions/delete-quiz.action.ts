import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const deleteQuizAction = createAction(
  QuizesActionTypes.DELETE,
  props<{ id: number }>()
);
export const deleteQuizSuccessAction = createAction(
  QuizesActionTypes.DELETE_SUCCESS,
  props<{ quizList: Quiz[] }>()
);
export const deleteQuizFailureAction = createAction(
  QuizesActionTypes.DELETE_FAILURE
);
