import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';

export const deleteQuizesAction = createAction(
  QuizesActionTypes.DELETE,
  props<{ id: number }>()
);
export const deleteQuizesSuccessAction = createAction(
  QuizesActionTypes.DELETE_SUCCESS,
  props<{ quizCollection: Quiz[] }>()
);
export const deleteQuizesFailureAction = createAction(
  QuizesActionTypes.DELETE_FAILURE
);
