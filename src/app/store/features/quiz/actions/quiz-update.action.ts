import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';
import { QuizActionTypes } from '../types';

export const updateQuizAction = createAction(
  QuizActionTypes.UPDATE,
  props<{ quiz: Quiz }>()
);
export const updateQuizSuccessAction = createAction(QuizActionTypes.UPDATE_SUCCESS, props<{ quizCollection: Quiz[] }>());
export const updateQuizFailureAction = createAction(QuizActionTypes.UPDATE_FAILURE);
