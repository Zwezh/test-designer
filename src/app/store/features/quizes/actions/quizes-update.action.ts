import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';

import { QuizesActionTypes } from '../types';


export const updateQuizesAction = createAction(
  QuizesActionTypes.UPDATE,
  props<{ quiz: Quiz }>()
);
export const updateQuizesSuccessAction = createAction(
  QuizesActionTypes.UPDATE_SUCCESS,
  props<{ quizCollection: Quiz[] }>()
);
export const updateQuizesFailureAction = createAction(
  QuizesActionTypes.UPDATE_FAILURE
);
