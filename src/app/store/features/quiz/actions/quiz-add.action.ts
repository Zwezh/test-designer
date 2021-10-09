import { createAction, props } from '@ngrx/store';
import { QuizActionTypes, QuizNew } from '../types';

export const addQuizAction = createAction(
  QuizActionTypes.ADD,
  props<{ quiz: Partial<QuizNew> }>()
);
export const addQuizSuccessAction = createAction(QuizActionTypes.ADD_SUCCESS);
export const addQuizFailureAction = createAction(QuizActionTypes.ADD_FAILURE);
