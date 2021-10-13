import { Quiz } from '@appApi';
import { createAction, props } from '@ngrx/store';
import { QuizActionTypes } from '../types';

export const deleteQuizAction = createAction(
  QuizActionTypes.DELETE,
  props<{ id: number }>()
);
export const deleteQuizSuccessAction = createAction(QuizActionTypes.DELETE_SUCCESS, props<{ quizCollection: Quiz[] }>());
export const deleteQuizFailureAction = createAction(QuizActionTypes.DELETE_FAILURE);
